// AuthPage.tsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import "./AuthPage.css";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(isLogin ? "Login Data:" : "Register Data:", data);
  };

  return (
    <div className="container">
      <motion.div
        className="form-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="title">{isLogin ? "Bem-vindo de volta!" : "Crie sua conta"}</h2>
        <p className="subtitle">{isLogin ? "Faça login para continuar" : "Registre-se para começar"}</p>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          {!isLogin && (
            <div className="input-group">
              <FaUser className="icon" />
              <input {...register("name", { required: "Nome é obrigatório" })} placeholder="Nome completo" />
              {errors.name && <span className="error">{errors.name.message}</span>}
            </div>
          )}
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input {...register("email", { required: "Email é obrigatório" })} placeholder="Email" />
            {errors.email && <span className="error">{errors.email.message}</span>}
          </div>
          <div className="input-group">
            <FaLock className="icon" />
            <input type="password" {...register("password", { required: "Senha é obrigatória" })} placeholder="Senha" />
            {errors.password && <span className="error">{errors.password.message}</span>}
          </div>
          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLogin ? "Entrar" : "Registrar"}
          </motion.button>
        </form>
        <p className="toggle-text">
          {isLogin ? "Não tem uma conta? " : "Já tem uma conta? "}
          <button onClick={() => setIsLogin(!isLogin)} className="toggle-btn">
            {isLogin ? "Registre-se" : "Faça login"}
          </button>
        </p>
      </motion.div>
    </div>
  );
}
