using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactCandidateTracker.Data
{
    public class Repository
    {
        private string _connectionString;

        public Repository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<Candidate> GetCandidates()
        {
            using var context = new CandidateDataContext(_connectionString);
            return context.Candidates.ToList();
        }
        public Candidate GetCandidate(int id)
        {
            using var context = new CandidateDataContext(_connectionString);
            return context.Candidates.FirstOrDefault(c=>c.Id==id);

        }

        public List<Candidate> GetConfirmed()
        {
            using var context = new CandidateDataContext(_connectionString);
            return context.Candidates.Where(c=>c.RegistrationStatus==RegistrationStatus.Confirmed).ToList();
        }

        public List<Candidate>  GetRefused()
        {
            using var context = new CandidateDataContext(_connectionString);
            return context.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Refused).ToList();
        }

        public List<Candidate> GetPending()
        {
            using var context = new CandidateDataContext(_connectionString);
            return context.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Pending).ToList();
        }


        public void AddCandidate(Candidate candidate)
        {
            using var context = new CandidateDataContext(_connectionString);
            context.Candidates.Add(candidate);
            context.SaveChanges();
        }

        public void AddRefused(Candidate candidate)
        {
            using var context = new CandidateDataContext(_connectionString);
            context.Candidates.Update(candidate);
            context.SaveChanges();
        }

        public void AddConfirmed(Candidate candidate)
        {
            using var context = new CandidateDataContext(_connectionString);
            context.Candidates.Update(candidate);
            context.SaveChanges();
        }
    }
}
