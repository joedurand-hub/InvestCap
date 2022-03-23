import Image from "next/image";
import { useRouter } from "next/router";
import { useMoralis } from "react-moralis";
import Layout from "../components/Layout/Layout";
import Section from "../components/Layout/Section/Section";
import Button from "../components/Button/Button";

// Inicio de sesión con MetaMask

export default function Home() {
  const router = useRouter();
  const { authenticate, isAuthenticated, authError, account, user } = useMoralis();

  const login = async () => {
    console.log("click")
    if (!isAuthenticated) {
      await authenticate({signingMessage: "Log in using Moralis" })
        .then(function (user) {
          router.push("/dashboard")
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          router.push("/")
          console.log(error);
        });
      }
    if(isAuthenticated) router.push("/dashboard") 
    }
    
  return (
    <Layout>
      <Section>
        {authError && (
          <p>
            {authError.name}
            {authError.message}
          </p>
        )}

          <Button name={`Conectar`} variant="primary" onClick={login}
          ></Button>

      </Section>
    </Layout>
  );
}
