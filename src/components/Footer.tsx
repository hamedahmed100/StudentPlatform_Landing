import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16 lg:py-20">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-12 mb-12 lg:mb-16">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img src={logo} alt="معلمي" className="h-14 lg:h-16 w-auto mb-6 brightness-0 invert" />
            <p className="text-background/70 max-w-2xl text-base lg:text-lg leading-relaxed">
              منصة معلمي التعليمية - محتوى تعليمي عالي الجودة لطلاب المرحلة الثانوية، 
              منظم ومتاح في أي وقت ومن أي مكان.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-lg lg:text-xl">روابط سريعة</h4>
            <ul className="space-y-3 text-background/70 text-base lg:text-lg">
              <li><a href="#home" className="hover:text-background transition-colors">الرئيسية</a></li>
              <li><a href="#students" className="hover:text-background transition-colors">المميزات</a></li>
              <li><a href="#grades" className="hover:text-background transition-colors">الصفوف الدراسية</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">تواصل معنا</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 lg:pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-background/60 text-sm lg:text-base">
          <p>© {currentYear} منصة معلمي. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6 lg:gap-8">
            <a href="#" className="hover:text-background transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-background transition-colors">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
