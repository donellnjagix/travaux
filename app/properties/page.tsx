import Property from ".";
//import Design from "./Design";
import Footer from "../footer";
import Nav from "./navbar";
import Contact from "../components/contact";
import WhatsAppButton from '../components/WhatsAppButton';

type Props = {};

const Properties = async (props: Props) => {
  return (
    <main>
      <Nav/>
      <Property />
      <WhatsAppButton />
    
      <Contact/>
      <Footer />
    </main>
  );
};

export default Properties;
