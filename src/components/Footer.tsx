import React from "react";
import { Shield } from "lucide-react";

// Social media
const socialLinks = {
  Twitter: "https://x.com/Aritra123x",
  LinkedIn: "https://www.linkedin.com/in/aritra-kundu-0689a7320/",
  Facebook: "https://www.facebook.com/aritra.kundu.35574",
  GitHub: "https://github.com/Aritra0101x8e2",
  Instagram: "https://www.instagram.com/__aritra__001/",
};

const socialIcons = {
  Twitter: "ri-twitter-fill",
  LinkedIn: "ri-linkedin-box-fill",
  Facebook: "ri-facebook-box-fill",
  GitHub: "ri-github-fill",
  Instagram: "ri-instagram-fill",
};

const teamMembers = [
  {
    name: "Aritra Kundu",
    title: "Founder & CEO",
    image: "/pandaME.png",
    link: "http://bento.me/aritra-",
  },
  {
    name: "Shivam Kumar",
    title: "CTO",
    image: "/shivam.png",
    link: "https://www.facebook.com/profile.php?id=100036321540863&mibextid=ZbWKwL",
  },
  {
    name: "Prince Kumar",
    title: "CDO",
    image: "/prince.png",
    link: "https://www.linkedin.com/in/prince-kr-jha-505475273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Komal Sharma",
    title: "PR & Outreach Executive",
    image: "/komal.png",
    link: "https://www.instagram.com/komal132006sharma?igsh=MXN4bTB0cW1mczV2Mw==",
  },
  {
    name: "Triparna Karmakar",
    title: "AI Ethics & Research",
    image: "/triparna.png",
    link: "http://www.linkedin.com/in/triparna-karmakar-a480a3324",
  },
];

const Footer = () => {
  return (
    <footer id="footer" className="bg-cyber-dark border-t border-gray-800 py-12">

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <a
              href="#home"
              className="flex items-center space-x-2 text-foreground hover:text-cyber-blue transition mb-4"
            >
              <Shield className="w-8 h-8 text-cyber-blue" />
              <span className="text-xl font-bold font-['Outfit'] tracking-wide">
                DARK<span className="text-cyber-blue">WAVE</span>
              </span>
            </a>
            <p className="text-foreground/70 mb-6">
              Advanced cybersecurity solutions to protect your business from digital fraud and emerging threats.
            </p>
            <div className="flex space-x-4">
              {Object.entries(socialLinks).map(([platform, url], i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-cyber-blue/10 transition-colors text-foreground/70 hover:text-cyber-blue"
                >
                  <i className={`${socialIcons[platform]} text-2xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
            {[
  { label: "Fraud Prevention", href: "https://destiny-by-aritra-kundu.blogspot.com/2025/04/darkwave-unparalleled-cyber-defence.html" },
  { label: "Identity Protection", href: "https://ryvora-darkwave-aritra.vercel.app/" },
  { label: "AI Security", href: "https://sentinel-ai-dark-wave.vercel.app/" },
  { label: "Ransomware", href: "https://destiny-by-aritra-kundu.blogspot.com/2025/04/d-r-k-w-v-e.html" },
  { label: "Blockchain", href: "https://trust-vault-id-darkwave-aritra.vercel.app/" },
  { label: "Blockchain", href: "https://trust-vault-id-darkwave-aritra.vercel.app/" },
].map(({ label, href }, i) => (
  <li key={i}>
    <a
      href={href}
      className="text-foreground/70 hover:text-cyber-blue transition-colors"
    >
      {label}
    </a>
  </li>
))}

            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Company</h4>
            <ul className="space-y-3">
            {[
  { label: "About Us", href: "https://destiny-by-aritra-kundu.blogspot.com/2025/04/d-r-k-w-v-e-solutions.html" },
  { label: "Leadership", href: "https://destiny-by-aritra-kundu.blogspot.com/2025/04/meet-team-d-r-k-w-v-e.html" },
  { label: "Careers", href: "https://destiny-by-aritra-kundu.blogspot.com/2025/04/careers-d-r-k-w-v-e-solutions.html" },
  { label: "News", href: "https://destiny-by-aritra-kundu.blogspot.com/2025/04/d-r-k-w-v-e-solutions.html" },
  { label: "Blog", href: "https://destiny-by-aritra-kundu.blogspot.com/2025/04/d-r-k-w-v-e-solutions.html" },
  { label: "Contact", href: "https://wa.me/qr/7DGKFLHEAXGOB1", external: true },
].map(({ label, href, external }, i) => (
  <li key={i}>
    <a
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : ""}
      className="text-foreground/70 hover:text-cyber-blue transition-colors"
    >
      {label}
    </a>
  </li>
))}

            </ul>
          </div>

          {/* Meet the Team */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Meet our Team</h4>
            <ul className="space-y-4">
              {teamMembers.map((member, i) => (
                <li key={i}>
                  <a
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 group"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-10 h-10 rounded-full object-cover border border-cyber-blue group-hover:scale-105 transition-transform"
                    />
                    <span className="text-foreground/70 group-hover:text-cyber-blue transition-colors">
                      <strong>{member.name}</strong>, {member.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} DarkWave Security & Solutions - by Aritra Kundu - All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-foreground/60">
            <a href="#" className="hover:text-cyber-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyber-blue transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cyber-blue transition-colors">Security</a>
            <a href="#" className="hover:text-cyber-blue transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
