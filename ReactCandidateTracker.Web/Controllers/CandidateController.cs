using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ReactCandidateTracker.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactCandidateTracker.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateController : ControllerBase
    {
        private string _connectionString;

        public CandidateController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpPost]
        [Route("addcandidate")]
        public void AddCandidate(Candidate candidate)
        {
            var repo = new Repository(_connectionString);
            candidate.RegistrationStatus = RegistrationStatus.Pending;
            repo.AddCandidate(candidate);
        }
        [HttpGet]
        [Route("getcandidates")]
        public List<Candidate> GetCandidates()
        {
            var repo = new Repository(_connectionString);
            return repo.GetCandidates();
        }

        [HttpGet]
        [Route("getconfirmed")]
        public List<Candidate> GetConfirmed()
        {
            var repo = new Repository(_connectionString);
            return repo.GetConfirmed();
        }

        [HttpGet]
        [Route("getrefused")]
        public List<Candidate> GetRefused()
        {
            var repo = new Repository(_connectionString);
            return repo.GetRefused();
        }

        [HttpGet]
        [Route("getpending")]
        public List<Candidate> GetPending()
        {
            var repo = new Repository(_connectionString);
            return repo.GetPending();
        }

        [HttpGet]
        [Route("getcandidate")]
        public Candidate GetCandidate(int id)
        {
            var repo = new Repository(_connectionString);
            return repo.GetCandidate(id);
        }

        [HttpPost]
        [Route("addrefused")]
        public void AddRefused(Candidate candidate)
        {
            var repo = new Repository(_connectionString);
            candidate.RegistrationStatus = RegistrationStatus.Refused;
            repo.AddRefused(candidate);
        }

        [HttpPost]
        [Route("addconfirmed")]
        public void AddConfirmed(Candidate candidate)
        {
            var repo = new Repository(_connectionString);
            candidate.RegistrationStatus = RegistrationStatus.Confirmed;
            repo.AddConfirmed(candidate);
        }
    }
}
