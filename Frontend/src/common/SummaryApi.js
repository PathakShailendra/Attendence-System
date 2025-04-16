const SummaryApi = {
  adminRegister: {
    url: "/api/admin/register",
  },
  adminLogin : {
    url: "/api/admin/login",
  },
  registerEmployee : {
    url : "/api/admin/register/employee"
  },
  getAllEmployees : {
    url : "/api/admin/get-all-employees"
  },
  getAttendance: {
    url: "/api/admin/attendance", // you'll append /empId in component
  },
};

export default SummaryApi;
