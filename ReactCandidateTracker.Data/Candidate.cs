﻿using System;

namespace ReactCandidateTracker.Data
{
    public class Candidate
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Notes { get; set; }
        public RegistrationStatus RegistrationStatus { get; set; }
    }
}
public enum RegistrationStatus
{
    Pending,
    Confirmed,
    Refused
}

