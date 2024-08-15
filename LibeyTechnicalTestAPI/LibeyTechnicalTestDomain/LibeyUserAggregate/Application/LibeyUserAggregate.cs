using LibeyTechnicalTestDomain.LibeyUserAggregate.Application.DTO;
using LibeyTechnicalTestDomain.LibeyUserAggregate.Application.Interfaces;
using LibeyTechnicalTestDomain.LibeyUserAggregate.Domain;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace LibeyTechnicalTestDomain.LibeyUserAggregate.Application
{
    public class LibeyUserAggregate : ILibeyUserAggregate
    {
        private readonly ILibeyUserRepository _repository;
        public LibeyUserAggregate(ILibeyUserRepository repository)
        {
            _repository = repository;
        }
        public void Create(UserUpdateorCreateCommand command)
        {
            if (command == null)
            {
                throw new ArgumentNullException(nameof(command));
            }
            if (string.IsNullOrEmpty(command.DocumentNumber))
            {
                throw new ArgumentException("El documento de identidad es Obligatorio");
            }

            var libeyUser = new LibeyUser(
            command.DocumentNumber,
            command.DocumentTypeId,
            command.Name,
            command.FathersLastName,
            command.MothersLastName,
            command.Address,
            command.UbigeoCode,
            command.Phone,
            command.Email,
            command.Password,
            command.Active
        );

            _repository.Create(libeyUser);




        }

        public void Delete(string documentNumber)
        {
            var libeyUser = _repository.FindResponse(documentNumber);
            if (libeyUser != null)
            {
                _repository.Delete(libeyUser.DocumentNumber);
            }
            else
            {
                throw new KeyNotFoundException("Usuario " + documentNumber + " no encontrado");
            }
        }

        public LibeyUserResponse FindResponse(string documentNumber)
        {
            var row = _repository.FindResponse(documentNumber);
            return row;
        }

        public IEnumerable<LibeyUserResponse> GetUsers()
        {
            var listLibeyUsers = _repository.GetUsers();
            return listLibeyUsers;
        }

        public void Update(UserUpdateorCreateCommand comand)
        {
            var libeyUser = _repository.FindResponse(comand.DocumentNumber);

            if(libeyUser != null)
            {
                var user = new LibeyUser(
                comand.DocumentNumber,
                comand.DocumentTypeId,
                comand.Name,
                comand.FathersLastName,
                comand.MothersLastName,
                comand.Address,
                comand.UbigeoCode,
                comand.Phone,
                comand.Email,
                comand.Password,
                comand.Active
            );
                _repository.Update(user);

            } else
            {
                throw new KeyNotFoundException("Usuario" +comand.DocumentNumber+ " no encontrado para actualizar");
            }
        }
    }
}