import React, { useEffect } from "react";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { Helmet } from "react-helmet";

const TermsAndConditions = () => {
  useEffect(() => {
    // Ensure scrolling to the top of the document when the component is mounted
    window.scrollTo({
      top: 0,
      behavior: "auto", // You can use "auto" for instant scroll
    });

    // As a fallback, scroll the root element
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="px-8 md:px-16 py-16 font-extrabold ">
      <Helmet>
        <title>Terms and Conditions</title>
        <meta
          name="description"
          content="Review the terms and conditions for using Propques' services and website."
        />
        <link rel="canonical" href="https://propques.com/terms-and-conditions" />
      </Helmet>

      <br />
      <h1 className="text-3xl font-bold mb-6  text-blue-500">
        Terms and Conditions
      </h1>
      <p className="mb-4 text-lg font-semibold">
        PLEASE READ THE TERMS OF THIS POLICY CAREFULLY BEFORE USING THE SITE
      </p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What’s in these terms?</h2>
        <p>
          This terms of use policy and other applicable terms of conditions sets
          out the content standards and contains rules that apply when you
          interact and use with our site.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Who we are and how to contact us
        </h2>
        <p>
          <a href="https://propques.com/" className="text-blue-600 underline">
            propques.com
          </a>{" "}
          is a site operated by propques service pvt, a subsidiary of propques
          (“We”). We are registered in Bangalore, India.
        </p>
        <p>
          Our registered office is at: <br />
          Naagarbhaavi, Bangalore, 3rd floor, Tushar Arcade, Service Road,
          Naagarbhaavi, Bengaluru, Karnataka 560072 <br />
          We are a limited company.
        </p>
        <p>
          To contact us, email us at{" "}
          <a
            href="mailto:Buzz@propques.com"
            className="text-blue-600 underline"
          >
            Buzz@propques.com
          </a>{" "}
          or call us at:
        </p>
        <div className="flex items-center mt-2">
          <FiPhoneCall className="text-green-600 mr-2" />{" "}
          <span>+91 7392037856</span>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          By using our site, you accept these terms
        </h2>
        <p>
          By using our site, you confirm that you accept the terms of this
          policy and that you agree to comply with them. If you do not agree to
          these terms, you must not use our site.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Other applicable terms</h2>
        <p>
          These terms of use refer to the following additional terms, which also
          apply to your use of our site:
        </p>
        <ul className="list-disc list-inside">
          <li>
            Our Privacy Policy:{" "}
            <a
              href="https://propques.com/privacy"
              className="text-blue-600 underline"
            >
              https://propques.com/privacy
            </a>
          </li>
          <li>
            Our Cookie Policy, which sets out information about the cookies on
            our site.
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          We may make changes to these terms
        </h2>
        <p>
          We amend these terms from time to time. Every time you wish to use our
          site, please check these terms to ensure you understand the terms that
          apply at that time.
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          We may make changes to our site
        </h2>
        <p>
          We may update and change our site from time to time to reflect changes
          to our services, our users’ needs and our business priorities.
        </p>
        <p>
          We do not guarantee that our site, or any content on it, will always
          be available or be uninterrupted. We may suspend or withdraw or
          restrict the availability of all or any part of our site for business
          and operational reasons. We will try to give you reasonable notice of
          any suspension or withdrawal.
        </p>
        <p>
          You are also responsible for ensuring that all persons who access our
          site through your internet connection are aware of these terms of use
          and other applicable terms and conditions, and that they comply with
          them.
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          We may transfer this agreement to someone else
        </h2>
        <p>
          We are the owner or the licensee of all intellectual property rights
          in our site, and in the material published on it. Those works are
          protected by copyright laws and treaties around the world. All such
          rights are reserved.
        </p>
        <p>
          You may print off one copy, and may download extracts, of any page(s)
          from our site for your personal use and you may draw the attention of
          others within your organisation to content posted on our site.
        </p>
        <p>
          You must not modify the paper or digital copies of any materials you
          have printed off or downloaded in any way, and you must not use any
          illustrations, photographs, video or audio sequences or any graphics
          separately from any accompanying text.
        </p>
        <p>
          Our status (and that of any identified contributors) as the authors of
          content on our site must always be acknowledged.
        </p>
        <p>
          You must not use any part of the content on our site for commercial
          purposes without obtaining a license to do so from us or our
          licensors.
        </p>
        <p>
          If you print off, copy or download any part of our site in breach of
          these terms of use and other applicable terms of conditions, your
          right to use our site will cease immediately and you must, at our
          option, return or destroy any copies of the materials you have made.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Prohibited uses</h2>
        <p>
          You may use our site only for lawful purposes. You may not use our
          site:
        </p>
        <ul className="list-disc list-inside">
          <li>
            In any way that breaches any applicable local, national or
            international law or regulation.
          </li>
          <li>
            In any way that is unlawful or fraudulent or has any unlawful or
            fraudulent purpose or effect.
          </li>
          <li>
            For the purpose of harming or attempting to harm minors in any way.
          </li>
          <li>To bully, insult, intimidate or humiliate any person.</li>
          <li>
            To send, knowingly receive, upload, download, use or re-use any
            material which does not comply with our content standards.
          </li>
          <li>
            To transmit, or procure the sending of, any unsolicited or
            unauthorized advertising or promotional material or any other form
            of similar solicitation (spam).
          </li>
          <li>
            To knowingly transmit any data, send or upload any material that
            contains viruses, Trojan horses, worms, time-bombs, keystroke
            loggers, spyware, adware or any other harmful programs or similar
            computer code designed to adversely affect the operation of any
            computer software or hardware.
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">You also agree:</h2>

        <ul className="list-disc list-inside">
          <li>
            Not to reproduce, duplicate, copy or re-sell any part of our site in
            contravention of the provisions of our terms of website use.
          </li>
          <li>
            Not to access without authority, interfere with, damage or disrupt:
          </li>
          <li>any part of our site;</li>
          <li>any equipment or network on which our site is stored;</li>
          <li>any software used in the provision of our site; or</li>
          <li>
            any equipment or network or software owned or used by any third
            party.
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Interactive services</h2>
        <p>
          We may from time to time provide interactive services on our site,
          including, without limitation:
        </p>

        <ul className="list-disc list-inside">
          <li>Chat rooms.</li>
          <li>Bulletin boards.</li>
        </ul>
        <p>(interactive services.)</p>
        <p>
          Where we do provide any interactive service, we will provide clear
          information to you about the kind of service offered, if it is
          moderated and what form of moderation is used (including whether it is
          human or technical).
        </p>
        <p>
          We will do our best to assess any possible risks for users (and in
          particular, for children) from third parties when they use any
          interactive service provided on our site, and we will decide in each
          case whether it is appropriate to use moderation of the relevant
          service (including what kind of moderation to use) in the light of
          those risks. However, we are under no obligation to oversee, monitor
          or moderate any interactive service we provide on our site, and we
          expressly exclude our liability for any loss or damage arising from
          the use of any interactive service by a user in contravention of our
          content standards, whether the service is moderated or not.
        </p>
        <p>
          The use of any of our interactive services by a minor is subject to
          the consent of their parent or guardian. We advise parents who permit
          their children to use an interactive service that it is important that
          they communicate with their children about their safety online, as
          moderation is not fool proof. Minors who are using any interactive
          service should be made aware of the potential risks to them.
        </p>
        <p>
          Where we do moderate an interactive service, we will normally provide
          you with a means of contacting the moderator, should a concern or
          difficulty arise.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Do not rely on information on this site
        </h2>
        <p>
          The content on our site is provided for general information only. It
          is not intended to amount to advice on which you should rely. You must
          obtain professional or specialist advice before taking, or refraining
          from, any action on the basis of the content on our site.
        </p>
        <p>
          Although we make reasonable efforts to update the information on our
          site, we make no representations, warranties or guarantees, whether
          express or implied, that the content on our site is accurate, complete
          or up to date.
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          We are not responsible for websites we link to
        </h2>
        <p>
          Where our site contains links to other sites and resources provided by
          third parties, these links are provided for your information only.
          Such links should not be interpreted as approval by us of those linked
          websites or information you may obtain from them.
        </p>
        <p>We have no control over the contents of those sites or resources.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Breach of this policy</h2>
        <p>
          When we consider that a breach of this terms of use policy and other
          applicable terms of conditions has occurred, we may take such action
          as we deem appropriate.
        </p>
        <p>
          Failure to comply with this terms of use policy and other applicable
          terms of conditions constitutes a material breach of the terms of use
          and other applicable terms of conditions upon which you are permitted
          to use our site, and may result in our taking all or any of the
          following actions:
        </p>
        <ul className="list-disc list-inside">
          <li>
            Immediate, temporary or permanent withdrawal of your right to use
            our site.
          </li>
          <li>Issue of a warning to you.</li>
          <li>
            Legal proceedings against you for reimbursement of all costs on an
            indemnity basis (including, but not limited to, reasonable
            administrative and legal costs) resulting from the breach.
          </li>
          <li>Further legal action against you.</li>
          <li>
            Disclosure of such information to law enforcement authorities as we
            reasonably feel is necessary or as required by law.
          </li>
        </ul>
        <p>
          We exclude our liability for all action we may take in response to
          breaches of this terms of use policy and other applicable terms of
          conditions. The actions we may take are not limited to those described
          above, and we may take any other action we reasonably deem
          appropriate.
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          How to complain about content uploaded by other users
        </h2>
        <p>
          If you wish to complain about content uploaded by other users, please
          contact us on Buzz@propques.com.
        </p>
        <p>Our responsibility for loss or damage suffered by you</p>
        <p>Whether you are a consumer or a business user:</p>
        <ul className="list-disc list-inside">
          <li>
            We do not exclude or limit in any way our liability to you where it
            would be unlawful to do so.
          </li>
          <li>
            Different limitations and exclusions of liability will apply to
            liability arising as a result of the supply of any services to you,
            which will be set out in our terms and conditions for supply.
          </li>
          <li>
            We exclude all implied conditions, warranties, representations or
            other terms that may apply to our site or any content on it.
          </li>
          <li>
            We will not be liable to you for any loss or damage, whether in
            contract, tort (including negligence), breach of statutory duty, or
            otherwise, even if foreseeable, arising under or in connection with:
          </li>
          <li>use of, or inability to use, our site; or</li>
          <li>use of or reliance on any content displayed on our site.</li>
          <li>In particular, we will not be liable for:</li>
          <li>loss of profits, sales, business, or revenue;</li>
          <li>business interruption;</li>
          <li>loss of anticipated savings;</li>
          <li>loss of business opportunity, goodwill or reputation; or</li>
          <li>any indirect or consequential loss or damage.</li>
          <li>
            You agree to use our site solely for any commercial or business
            purposes, and we have no liability to you for any loss of profit,
            loss of business, business interruption, or loss of business
            opportunity.
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          How we may use your personal information
        </h2>
        <p>
          We will only use your personal information as set out in our Privacy
          Policy.
        </p>
        <p>
          We are not responsible for viruses and you must not introduce them
        </p>
        <p>
          We do not guarantee that our site will be secure or free from bugs or
          viruses.
        </p>
        <p>
          You are responsible for configuring your information technology,
          computer programmes and platform to access our site. You should use
          your own virus protection software.
        </p>
        <p>
          You must not misuse our site by knowingly introducing viruses,
          trojans, worms, logic bombs or other material that is malicious or
          technologically harmful. You must not attempt to gain unauthorised
          access to our site, the server on which our site is stored or any
          server, computer or database connected to our site. You must not
          attack our site via a denial-of-service attack or a distributed
          denial-of service attack. By breaching this provision, you would
          commit a criminal offence under the Computer Misuse Act 1990. We will
          report any such breach to the relevant law enforcement authorities and
          we will co-operate with those authorities by disclosing your identity
          to them. In the event of such a breach, your right to use our site
          will cease immediately.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Rules about linking to our site
        </h2>
        <p>
          You may link to our home page, provided you do so in a way that is
          fair and legal and does not damage our reputation or take advantage of
          it.
        </p>
        <p>
          You must not establish a link in such a way as to suggest any form of
          association, approval or endorsement on our part where none exists.
        </p>
        <p>
          You must not establish a link to our site in any website that is not
          owned by you.
        </p>
        <p>
          Our site must not be framed on any other site, nor may you create a
          link to any part of our site other than the home page.
        </p>
        <p>
          We reserve the right to withdraw linking permission without notice.
        </p>
        <p>
          The website in which you are linking must comply in all respects with
          the content standards set out in our terms.
        </p>
        <p>
          If you wish to link to or make any use of content on our site other
          than that set out above, please contact Buzz@propques.com.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Which country’s laws apply to any disputes?
        </h2>
        <p>
          If you are a consumer, please note that the terms of this policy, its
          subject matter and its formation are governed by Indian law. You and
          we both agree that the courts of India will have exclusive
          jurisdiction except that if you are a resident of Bengaluru, Karnataka
          you may also bring proceedings in Bengaluru, Karnataka, and if you are
          resident of Bengaluru, you may also bring proceedings in Karnataka.
        </p>
        <br />
        <p>
          If you are a business, the terms of this policy, its subject matter
          and its formation (and any non-contractual disputes or claims) are
          governed by Indian law. We both agree to the exclusive jurisdiction of
          the courts of India.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
