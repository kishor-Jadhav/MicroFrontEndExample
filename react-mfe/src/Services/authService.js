import axios from 'axios';
const api = axios.create({
  baseURL: 'http://localhost:5000/api/auth',
});

export const loginAPI = (data)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const mockApi={
                 email: "admin@test.com",
                password: "123456",
                token: "mock-jwt-token-123",
                role: "ADMIN",
            }

            if (
              data.email === mockApi.email &&
              data.password === mockApi.password
            ) {
              resolve({
                data: {
                  token: mockApi.token,
                  user: { email: mockApi.email, role: mockApi.role },
                },
              });
            } else {
              reject({
                response: {
                  data: { message: "Invalid email or password" },
                },
              });
            }
        }, 1000)
    })
}

export default api;