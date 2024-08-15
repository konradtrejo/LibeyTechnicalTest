using LibeyTechnicalTestDomain.LibeyUserAggregate.Domain;

namespace LibeyTechnicalTestDomain.LibeyUserAggregate.Application.DTO
{
    public record LibeyUserResponse
    {
        private LibeyUser user;
        public LibeyUserResponse()
        {
           
        }
        public LibeyUserResponse(LibeyUser user)
        {
            if (user != null)
            {
                DocumentNumber = user.DocumentNumber;
                Active = user.Active;
                Address = user.Address;
                DocumentTypeId = user.DocumentTypeId;
                Email = user.Email;
                FathersLastName = user.FathersLastName;
                MothersLastName = user.MothersLastName;
                Name = user.Name;
                Phone = user.Phone;
            }
        }

        public string DocumentNumber { get; init; }
        public int DocumentTypeId { get; init; }
        public string Name { get; init; }
        public string FathersLastName { get; init; }
        public string MothersLastName { get; init; }
        public string Address { get; init; }
        public string RegionCode { get; init; }
        public string ProvinceCode { get; init; }       
        public string UbigeoCode { get; init; }
        public string Phone { get; init; }
        public string Email { get; init; }
        public string Password { get; init; }
        public bool Active { get; init; }
    }
}