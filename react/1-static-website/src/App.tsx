import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Feed from "./components/Feed.tsx";
import Button from "./components/Button.tsx";
import Student from "./components/Student.tsx";
import UserYo from "./components/UserYo.tsx";

function App() {
  return (
    <>
      <Header />
      <Button />
      <UserYo isLoggedIn={true} username="yomama" />
      <UserYo isLoggedIn={false} username="yomama" />
      <Student name="John" id={1} isEnrolled={true} />
      <Student name="Adam" id={2} isEnrolled={false} />
      <Student />

      <Feed />
      <Footer />
    </>
  );
}

export default App;
