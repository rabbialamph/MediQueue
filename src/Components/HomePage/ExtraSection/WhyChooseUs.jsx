import {
  HiUserGroup,
  HiCalendar,
  HiLockClosed,
  HiPhone,
  HiChartBar,
} from "react-icons/hi";

const features = [
  {
    icon: HiUserGroup,
    title: "Expert Tutors",
    desc: "Learn from verified and experienced tutors",
  },
  {
    icon: HiCalendar,
    title: "Flexible Schedule",
    desc: "Book sessions at your convenience",
  },
  {
    icon: HiLockClosed,
    title: "Secure Payments",
    desc: "Safe and hassle-free transactions",
  },
  {
    icon: HiPhone,
    title: "24/7 Support",
    desc: "We’re here to help you anytime",
  },
  {
    icon: HiChartBar,
    title: "Progress Tracking",
    desc: "Track your learning and improve",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Why Choose MediQueue?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            We provide the best learning experience with world class tutors
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group p-6 rounded-2xl text-center 
                bg-white dark:bg-slate-900 
                shadow-md hover:shadow-xl 
                border border-gray-100 dark:border-slate-800
                transition-all duration-300"
              >
                {/* Icon */}
                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full 
                bg-gradient-to-r from-indigo-600 to-blue-600 text-white mb-4
                group-hover:scale-110 transition">
                  <Icon size={22} />
                </div>

                {/* Text */}
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}