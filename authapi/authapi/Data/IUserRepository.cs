using authapi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace authapi.Data
{
    public interface IUserRepository
    {
        User Create(User user);
    }
}
