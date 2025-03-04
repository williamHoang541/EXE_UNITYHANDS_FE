import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { PATH_NAME } from "../../../constant/pathname";
import axios from "axios";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import  useTitle from "../../../constant/useTitle";
import { BASE_URL } from "../../../constant/config";

const Register = () => {
  const navigate = useNavigate();
  useTitle("Đăng ký");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      toast.error("Mật khẩu nhập lại không khớp!");
      return;
    }

    try {
       await axios.post(
        `${BASE_URL}Account/registration`,
        {
          email,
          password,
          confirmPassword,
        },

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      
      );
      toast.dismiss();
      toast.success("Đăng ký thành công!");
      setTimeout(() => navigate(PATH_NAME.LOGIN), 1000);
    } catch (error) {
      toast.error(error.response?.data?.message || "Đăng ký thất bại!");
    }
  };

  return (
    <main className="login">
      <div className="login_container">
        <div className="login_wrapper">
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <div className="login_content_left_wrapper">
              <div className="login_content_left"></div>
            </div>
          </div>
          <div className="login_content_right col-xl-6 col-lg-6 col-md-6 col-12">
            <div className="login_box">
              <h3>Đăng ký tài khoản</h3>
              <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="register_box_input">
                  <div className="box">
                    <div className="box_email">
                      <input
                        type="email"
                        name="email"
                        className="input"
                        placeholder="Nhập địa chỉ email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="box">
                    <div className="box_password">
                      <input
                        type="password"
                        name="password"
                        className="input"
                        placeholder="Nhập mật khẩu"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="box">
                    <div className="box_password">
                      <input
                        type="password"
                        name="confirmPassword"
                        className="input"
                        placeholder="Nhập lại mật khẩu"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <button className="register_button" type="submit">
                  Đăng ký
                </button>
              </form>
              <div className="register_text_login">
                Bạn đã có tài khoản
                <Link to={PATH_NAME.LOGIN}>Đăng nhập</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
