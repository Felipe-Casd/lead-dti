using LeadsApi.Data;
using LeadsApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LeadsApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LeadsController : ControllerBase
    {
        private readonly LeadsContext _context;
        public LeadsController(LeadsContext context) => _context = context;

        [HttpGet("invited")]
        public async Task<IActionResult> GetInvited() =>
            Ok(await _context.Leads.Where(l => l.Status == "Invited").ToListAsync());

        [HttpGet("accepted")]
        public async Task<IActionResult> GetAccepted() =>
            Ok(await _context.Leads.Where(l => l.Status == "Accepted").ToListAsync());

        [HttpPost("{id}/accept")]
        public async Task<IActionResult> AcceptLead(int id)
        {
            var lead = await _context.Leads.FindAsync(id);
            if (lead == null) return NotFound();

            lead.Status = "Accepted";
            if (lead.Price > 500) lead.Price *= 0.9m;

            await _context.SaveChangesAsync();
            System.IO.File.AppendAllText("email_log.txt", $"Lead {lead.Id} accepted. Notify vendas@test.com\n");

            return Ok(lead);
        }

        [HttpPost("{id}/decline")]
        public async Task<IActionResult> DeclineLead(int id)
        {
            var lead = await _context.Leads.FindAsync(id);
            if (lead == null) return NotFound();

            lead.Status = "Declined";
            await _context.SaveChangesAsync();
            return Ok(lead);
        }
    }
}
