using Microsoft.AspNetCore.Mvc;

namespace WebView.Controller
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        /// <summary>
        /// Index
        /// </summary>
        /// <returns></returns>
        [Route("/Login/index")]
        public IActionResult Index()
        {
            return new ViewResult();
        }

        //[HttpPost]
        //public IActionResult Register(User user, Login login)
        //{
        //    user.UserId = new Guid();
        //    return Ok();
        //}

        /// <summary>
        /// Ensure that the email does not already have an account
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult VerifyEmail()
        {

            return Ok();
        }
    }
}
