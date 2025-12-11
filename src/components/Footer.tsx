import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img src={logo} alt="معلمي" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-background/70 max-w-md">
              منصة معلمي تربط بين المعلمين المتميزين وطلاب المرحلة الثانوية، 
              لتوفير محتوى تعليمي منظم وموثوق.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#home" className="hover:text-background transition-colors">الرئيسية</a></li>
              <li><a href="#students" className="hover:text-background transition-colors">للطلاب</a></li>
              <li><a href="#teachers" className="hover:text-background transition-colors">للمعلمين</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">تواصل معنا</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold mb-4">قانوني</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-background transition-colors">الشروط والأحكام</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>© {currentYear} منصة معلمي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
