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

const contactComponents = [
  { component: Contact1, title: "Contact 1" },
  { component: Contact2, title: "Contact 2" },
  { component: Contact3, title: "Contact 3" },
  { component: Contact4, title: "Contact 4" },
  { component: Contact5, title: "Contact 5" },
  { component: Contact6, title: "Contact 6" },
  { component: Contact7, title: "Contact 7" },
  { component: Contact9, title: "Contact 9" },
  { component: Contact12, title: "Contact 12" },
  { component: Contact14, title: "Contact 14" },
  { component: Contact24, title: "Contact 24" },
  { component: Contact26, title: "Contact 26" },
  { component: Contact29, title: "Contact 29" },

  // Add more contacts as necessary
];

const ContactsPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">CONTACTS</h1>
      <section className="mb-4">
        {contactComponents.map(
          ({ component: ContactComponent, title }, index) => (
            <div key={index}>
              {/* Render the title as an h2 element */}
              <h2 className="text-xl mb-2">{title}</h2>
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
