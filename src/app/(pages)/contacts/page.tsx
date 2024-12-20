import { Contact1 } from "@/components/Contacts/Contact1";
import { Contact2 } from "@/components/Contacts/Contact2";
import { Contact5 } from "@/components/Contacts/Contact5";
import { Contact6 } from "@/components/Contacts/Contact6";
import { Contact7 } from "@/components/Contacts/Contact7";
import { Contact9 } from "@/components/Contacts/Contact9";
import { Contact12 } from "@/components/Contacts/Contact12";
import { Contact24 } from "@/components/Contacts/Contact24";
import { Contact26 } from "@/components/Contacts/Contact26";
import { Contact29 } from "@/components/Contacts/Contact29";
import { Contact14 } from "@/components/Contacts/Contact14";
import { Contact3 } from "@/components/Contacts/Contact3";
import { Contact4 } from "@/components/Contacts/Contact4";
import { Contact8 } from "@/components/Contacts/Contact8";
import { Contact10 } from "@/components/Contacts/Contact10";
import { Contact11 } from "@/components/Contacts/Contact11";
import { Contact13 } from "@/components/Contacts/Contact13";
import { Contact15 } from "@/components/Contacts/Contact15";
import { Contact16 } from "@/components/Contacts/Contact16";
import { Contact17 } from "@/components/Contacts/Contact17";
import { Contact18 } from "@/components/Contacts/Contact18";
import { Contact19 } from "@/components/Contacts/Contact19";
import { Contact20 } from "@/components/Contacts/Contact20";
import { Contact21 } from "@/components/Contacts/Contact21";
import { Contact22 } from "@/components/Contacts/Contact22";
import { Contact23 } from "@/components/Contacts/Contact23";
import { Contact25 } from "@/components/Contacts/Contact25";
import { Contact27 } from "@/components/Contacts/Contact27";
import { Contact28 } from "@/components/Contacts/Contact28";
import Contact30 from "@/components/Contacts/Contact30";

const contactComponents = [
  { component: Contact1, title: "Contact 1" },
  { component: Contact2, title: "Contact 2" },
  { component: Contact3, title: "Contact 3" },
  { component: Contact4, title: "Contact 4" },
  { component: Contact5, title: "Contact 5" },
  { component: Contact6, title: "Contact 6" },
  { component: Contact7, title: "Contact 7" },
  { component: Contact8, title: "Contact 8" },
  { component: Contact9, title: "Contact 9" },
  { component: Contact10, title: "Contact 10" },
  { component: Contact11, title: "Contact 11" },
  { component: Contact12, title: "Contact 12" },
  { component: Contact13, title: "Contact 13" },
  { component: Contact14, title: "Contact 14" },
  { component: Contact15, title: "Contact 15" },
  { component: Contact16, title: "Contact 16" },
  { component: Contact17, title: "Contact 17" },
  { component: Contact18, title: "Contact 18" },
  { component: Contact19, title: "Contact 19" },
  { component: Contact20, title: "Contact 20" },
  { component: Contact21, title: "Contact 21" },
  { component: Contact22, title: "Contact 22" },
  { component: Contact23, title: "Contact 23" },
  { component: Contact24, title: "Contact 24" },
  { component: Contact25, title: "Contact 25" },
  { component: Contact26, title: "Contact 26" },
  { component: Contact27, title: "Contact 27" },
  { component: Contact28, title: "Contact 28" },
  { component: Contact29, title: "Contact 29" },
  { component: Contact30, title: "Contact 30" },

  // Add more contacts as necessary
];

const ContactsPage = () => {
  return (
    <div>
      <h1 className="text-8xl text-center font-bold mb-4">CONTACTS</h1>
      <section className="mb-4">
        {contactComponents.map(
          ({ component: ContactComponent, title }, index) => (
            <div key={index}>
              {/* Render the title as an h2 element */}
              <h2 className="text-4xl font-bold text-center mt-20 mb-5">
                {title}
              </h2>
              {/* Render the component */}
              <ContactComponent />
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default ContactsPage;
