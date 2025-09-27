function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        <div>
          <h2 className="text-white font-bold text-lg">CS — Ticket System</h2>
          <p className="mt-3 text-sm leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. It has been the industry’s standard dummy text since the 1500s.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Mission</a></li>
            <li><a href="#">Contact Sales</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Products &amp; Services</a></li>
            <li><a href="#">Customer Stories</a></li>
            <li><a href="#">Download Apps</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Information</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">Join Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Social Links</h3>
          <ul className="space-y-2 text-sm">
            <li>@CS — Ticket System</li>
            <li>@CS — Ticket System</li>
            <li>@CS — Ticket System</li>
            <li><a href="mailto:support@csst.com">support@csst.com</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer
