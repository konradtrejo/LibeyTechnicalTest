using LibeyTechnicalTestDomain.LibeyUserAggregate.Application.DTO;
namespace LibeyTechnicalTestDomain.LibeyUserAggregate.Application.Interfaces
{
    public interface ILibeyUserAggregate
    {
        LibeyUserResponse FindResponse(string documentNumber);
        void Create(UserUpdateorCreateCommand command);
        IEnumerable<LibeyUserResponse> GetUsers();
        void Update(UserUpdateorCreateCommand comand);
        void Delete(string documentNumber);
    }
}