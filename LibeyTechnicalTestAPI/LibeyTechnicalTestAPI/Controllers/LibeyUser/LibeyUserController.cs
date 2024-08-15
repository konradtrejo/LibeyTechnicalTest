using LibeyTechnicalTestDomain.LibeyUserAggregate.Application.DTO;
using LibeyTechnicalTestDomain.LibeyUserAggregate.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;
namespace LibeyTechnicalTestAPI.Controllers.LibeyUser
{
    [ApiController]
    [Route("[controller]")]
    public class LibeyUserController : Controller
    {
        private readonly ILibeyUserAggregate _aggregate;
        public LibeyUserController(ILibeyUserAggregate aggregate)
        {
            _aggregate = aggregate;
        }
        [HttpGet]
        [Route("{documentNumber}")]
        public IActionResult FindResponse(string documentNumber)
        {
            var row = _aggregate.FindResponse(documentNumber);
            return Ok(row);
        }
        [HttpPost]
        public IActionResult Create([FromBody] UserUpdateorCreateCommand command)
        {
            _aggregate.Create(command);
            return Ok(new ResponseBase
            {
                code = 0,
                message = "Usuario creado Correctamente"
            });
        
        }

        [HttpGet]
        [Route("users")]
        public IActionResult getLibeytUsers()
        {
            var listLibeyUsers = _aggregate.GetUsers();
            return Ok(listLibeyUsers);
        }

        [HttpPut]
        public IActionResult Update([FromBody] UserUpdateorCreateCommand command)
        {
            _aggregate.Update(command);
            return Ok(true);
        }

        [HttpDelete("{documentNumber}")]
        public IActionResult Delete(string documentNumber)
        {
            _aggregate.Delete(documentNumber);
            return Ok(true);
        }
    }
}