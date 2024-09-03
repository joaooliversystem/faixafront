'use client'
import { signIn } from "next-auth/react";
import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Link from 'next/link'

function Login() {

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const session = useSession();

  type CompanionId = {
    companion?: number | null | undefined;
  };

  // Handling login and loading (UI)

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault()

    if (!(username && password)) {
      alert('Por favor, preencha todos os campos');
      return;
    }
    else {

      setLoading(true);

      const result = await signIn('api', {
        identifier: username,
        password: password,
        redirect: false,
      });

      localStorage.setItem("username", username);

      setTimeout(() => {
        if (result?.ok) {
          if (localStorage.getItem('newCompanion') === 'true') {
            router.replace("/home");
          } else {
            router.replace('/search');
          }

        } else {
          setLoading(false);
          setTimeout(() => {
            alert('Usuário ou senha inválidos. Por favor, tente novamente.');
          }, 200);
        }
      }, 1500);
    }
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100 py-5">
          {/* Main content START */}
          <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
            {/* Sign in START */}
            {loading && (
              <div style={{ color: '#FF6883', zIndex: 5, position: 'absolute', top: '45%', left: '49%', width: '3rem', height: '3rem' }} className={loading ? "spinner-border" : ""} role="status" />
            )}
            <div className="card card-body text-center p-4 p-sm-5" style={loading ? { backgroundColor: '#FFFFFF', opacity: 0.5 } : {}}>
              {loading && (
                <div style={{ backgroundColor: '#FFFFFF', opacity: 0.5, zIndex: 1, position: 'fixed', width: '100%', height: '100%', top: '0', left: '0' }} ></div>
              )}
              {/* Title */}
              <h1 className="mb-2">Login</h1>
              <p className="mb-0">Ainda não tem uma conta?
                <Link href="/sign-up"> Clique aqui</Link>
              </p>
              {/* Form START */}
              <form
                onSubmit={handleSubmit}
                className="mt-sm-4">
                {/* Email */}
                <div
                  className="mb-3 input-group-lg"
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                {/* New password */}
                <div className="mb-3 position-relative">
                  {/* Password */}
                  <div className="input-group input-group-lg">
                    <input
                      className="form-control fakepassword"
                      type="password"
                      id="psw-input"
                      placeholder="Senha"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="input-group-text p-0">
                      {/* <i className="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px" /> */}
                    </span>
                  </div>
                </div>
                {/* Remember me */}
                <div className="mb-3 d-sm-flex justify-content-between">
                  <div>
                    <input type="checkbox" className="form-check-input" id="rememberCheck" />
                    <span
                      style={{
                        marginLeft: "5px",
                      }}
                    >
                      <label className="form-check-label" htmlFor="rememberCheck">Lembrar de mim</label>
                    </span>
                  </div>
                  <Link href="forgot-password">
                    <span >Esqueceu a senha?</span>
                  </Link>
                </div>
                {/* Button */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-lg btn-primary">
                    Login
                  </button>
                </div>
                {/* Copyright */}
                <p className="mb-0 mt-3">©2024 <a target="_blank" href="https://faixarosa.com.br/">Faixa Rosa.</a> All rights reserved</p>
              </form>
              {/* Form END */}
            </div>
            {/* Sign in START */}
          </div>
        </div> {/* Row END */}
      </div>
    </>
  );
}

export default Login;
