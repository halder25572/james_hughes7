import {
  Handshake,
  MessageCircleMore,
  FileText,
  GitBranch,
} from "lucide-react";

const features = [
  {
    icon: Handshake,
    title: "Direct buyer",
  },
  {
    icon: MessageCircleMore,
    title: "Clear communication & documented outcomes",
  },
  {
    icon: FileText,
    title: "We handle paperwork and logistics",
  },
  {
    icon: GitBranch,
    title: "Multiple exit options, not just one number",
  },
];

export default function WhyVintoCash() {
  return (
    <section className="bg-gray-100 py-12 md:py-16 lg:py-20 mb-30">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold">
          Why VinToCash
        </h2>

        <p className="mt-2 text-gray-500 text-sm md:text-base">
          Professional service built on trust and transparency
        </p>

        {/* Cards */}
        <div className="mt-10 grid gap-14 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
              >
                <Icon
                  size={28}
                  className="text-red-500 mb-3"
                />

                <p className="text-sm font-medium text-gray-700 max-w-45">
                  {feature.title}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
