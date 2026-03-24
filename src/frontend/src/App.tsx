import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import { useFadeIn } from "@/hooks/useFadeIn";
import { useSubmitReservation } from "@/hooks/useQueries";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Accessibility,
  Baby,
  Car,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Clock,
  CreditCard,
  ExternalLink,
  Loader2,
  Mail,
  MapPin,
  Menu,
  PawPrint,
  Phone,
  Star,
  TreePine,
  Umbrella,
  Users,
  UtensilsCrossed,
  Waves,
  Wifi,
  Wine,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const queryClient = new QueryClient();

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="font-sans text-sm font-medium text-charcoal hover:text-maroon transition-colors duration-200"
    >
      {children}
    </a>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
      style={{ backgroundColor: "#EFE2CC" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#top"
            className="flex flex-col leading-none group"
            data-ocid="nav.link"
          >
            <span
              className="font-serif font-bold text-xl md:text-2xl text-maroon tracking-tight group-hover:text-maroon-dark transition-colors"
              style={{ letterSpacing: "-0.03em" }}
            >
              The Kitchen
            </span>
            <span className="font-sans text-[9px] tracking-[0.28em] text-charcoal-light font-semibold uppercase">
              AT THE MISSION
            </span>
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            <NavLink href="#about">About</NavLink>
            <NavLink href="#menu">Menu</NavLink>
            <NavLink href="#gallery">Gallery</NavLink>
            <NavLink href="#hours">Hours</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a href="#contact">
              <Button
                data-ocid="nav.primary_button"
                className="bg-maroon text-cream hover:bg-maroon-dark font-sans font-semibold text-sm rounded-full px-5 border border-maroon-dark/30"
              >
                Book a Table
              </Button>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="md:hidden p-2 text-charcoal"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-tan px-4 py-4 flex flex-col gap-4"
          style={{ backgroundColor: "#EFE2CC" }}
        >
          <NavLink href="#about" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink href="#menu" onClick={closeMenu}>
            Menu
          </NavLink>
          <NavLink href="#gallery" onClick={closeMenu}>
            Gallery
          </NavLink>
          <NavLink href="#hours" onClick={closeMenu}>
            Hours
          </NavLink>
          <NavLink href="#contact" onClick={closeMenu}>
            Contact
          </NavLink>
          <Button
            className="bg-maroon text-cream hover:bg-maroon-dark font-sans font-semibold w-full rounded-full"
            onClick={() => {
              closeMenu();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book a Table
          </Button>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex items-center justify-center min-h-[100svh] overflow-hidden"
      style={{ background: "#1A0F0A" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-interior.dim_1600x900.jpg')",
        }}
      />

      {/* Cinematic gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/85" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 20%, rgba(0,0,0,0.45) 100%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-1/3"
        style={{
          background:
            "linear-gradient(to top, rgba(107,31,31,0.25), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-24">
        <p className="hero-eyebrow eyebrow text-gold mb-6 justify-center">
          Hotel Mission De Oro · Santa Nella, CA
        </p>

        <div className="flex items-center justify-center gap-4 mb-7">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold/70" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
        </div>

        <h1
          className="hero-title font-serif font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.0] mb-8"
          style={{ letterSpacing: "-0.03em" }}
        >
          Where Every Meal
          <br />
          <em className="italic text-gold" style={{ letterSpacing: "-0.01em" }}>
            Tells a Story
          </em>
        </h1>

        <p
          className="hero-subtitle font-sans text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{ letterSpacing: "0.01em" }}
        >
          California-style cuisine with locally sourced ingredients, served with
          warmth and care inside Hotel Mission De Oro.
        </p>

        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#contact">
            <Button
              data-ocid="hero.primary_button"
              size="lg"
              className="bg-maroon hover:bg-maroon-dark text-cream font-sans font-semibold rounded-full px-9 py-3 text-base w-full sm:w-auto border border-maroon-light/40 shadow-lg shadow-maroon/30"
            >
              Reserve Your Table
            </Button>
          </a>
          <a href="#menu">
            <Button
              data-ocid="hero.secondary_button"
              size="lg"
              variant="outline"
              className="border-2 border-white/60 text-white bg-transparent hover:bg-white/15 font-sans font-semibold rounded-full px-9 py-3 text-base w-full sm:w-auto backdrop-blur-sm"
            >
              View Our Menu
            </Button>
          </a>
        </div>

        <div className="hero-stars flex items-center justify-center gap-2">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
            ))}
          </div>
          <span className="font-sans text-white/65 text-xs tracking-wide">
            Rated 4.5 across platforms
          </span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-2.5 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className="fade-in-up py-24 md:py-32"
      style={{ backgroundColor: "#F6F1E6" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <p className="eyebrow text-maroon mb-5">Our Story</p>
            <h2
              className="font-serif text-4xl md:text-5xl text-charcoal font-bold leading-tight mb-7 section-heading-accent"
              style={{ letterSpacing: "-0.025em" }}
            >
              A California Culinary Experience
            </h2>
            <p className="font-sans text-charcoal-light text-base leading-[1.85] mb-4">
              Opened in 2017, The Kitchen at The Mission brings together the
              rich tapestry of California flavors — American classics,
              international influences, and grill-forward favorites — all under
              one roof inside the historic Hotel Mission De Oro.
            </p>
            <p className="font-sans text-charcoal-light text-base leading-[1.85] mb-4">
              We serve travelers passing through on I-5, families celebrating
              milestones, and local guests alike. Every ingredient we use is
              thoughtfully sourced, fresh, and chosen to let the natural flavors
              of California shine.
            </p>
            <p className="font-sans text-charcoal-light text-base leading-[1.85] mb-9">
              Each week, our chef curates featured entrées that showcase
              seasonal ingredients and culinary creativity — there's always
              something new to discover.
            </p>

            <div className="flex flex-wrap gap-2 mb-9">
              {[
                "Opened 2017",
                "Locally Sourced",
                "Family Friendly",
                "Pet-Friendly Patio",
              ].map((b) => (
                <span
                  key={b}
                  className="font-sans text-xs font-semibold px-3 py-1.5 rounded-full border border-tan text-charcoal-light bg-cream-dark tracking-wide"
                >
                  {b}
                </span>
              ))}
            </div>

            <a href="#contact">
              <Button
                data-ocid="about.primary_button"
                className="bg-maroon hover:bg-maroon-dark text-cream font-sans font-semibold rounded-full px-7"
              >
                Make a Reservation
              </Button>
            </a>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/assets/generated/patio-outdoor.dim_1200x700.jpg"
              alt="Outdoor patio at The Kitchen at The Mission"
              className="rounded-2xl w-full object-cover shadow-card h-80 md:h-[26rem]"
              loading="lazy"
            />
            <div
              className="absolute -bottom-4 -left-4 bg-maroon text-cream rounded-xl px-5 py-3 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #6B1F1F 0%, #511717 100%)",
              }}
            >
              <p
                className="font-serif font-bold text-lg"
                style={{ letterSpacing: "-0.02em" }}
              >
                Est. 2017
              </p>
              <p className="font-sans text-xs opacity-75 tracking-wide">
                Hotel Mission De Oro
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Menu ────────────────────────────────────────────────────────────────────

const DISHES = [
  {
    img: "/assets/generated/dish-tomahawk.dim_600x450.jpg",
    name: "THE TOMAHAWK",
    desc: "46 oz. bone-in ribeye grilled over open flame, served family-style with balsamic fig reduction, jalapeño demi-glaze, creamy mashed potatoes, and seasonal vegetables.",
    tag: "Signature",
    price: "$148",
  },
  {
    img: "/assets/generated/dish-cioppino.dim_600x450.jpg",
    name: "Cioppino",
    desc: "Classic seafood stew with fresh lobster, scallops, shrimp, mussels, clams in a rich herb-scented tomato broth.",
    tag: "Chef's Pick",
    price: "$58",
  },
  {
    img: "/assets/generated/dish-pizza.dim_600x450.jpg",
    name: "Neapolitan Pizza",
    desc: "Hand-tossed artisan pizzas — Margherita, Buffalo Ranch Chicken, BBQ Chicken, Jalapeño Popper. A crowd favorite for every age.",
    tag: "Family Favorite",
    price: "from $18",
  },
];

const MENU_DATA: Record<
  string,
  { category: string; items: { name: string; price: string }[] }[]
> = {
  Breakfast: [
    {
      category: "Egg Dishes",
      items: [
        { name: "The Hotel California", price: "$14" },
        { name: "Chilaquiles", price: "$14" },
        { name: "NY Steak & Eggs", price: "$21" },
        { name: "Breakfast Burrito", price: "$12" },
        { name: "California Country Eggs Benedict", price: "$14" },
        { name: "Country Fried Steak & Eggs", price: "$21" },
        { name: "Steak & Wild Mushroom Omelet", price: "$16" },
        { name: "Traditional Mission de Oro Omelet", price: "$14" },
      ],
    },
    {
      category: "From the Griddle",
      items: [
        { name: "French Toast", price: "$14" },
        { name: "Buttermilk Pancakes", price: "$12" },
        { name: "Biscuits and Gravy", price: "from $8" },
      ],
    },
    {
      category: "Light Bites",
      items: [
        { name: "Old Fashioned Oatmeal Bowl", price: "$10" },
        { name: "Yogurt Parfait", price: "$6" },
        { name: "Cereal Bowl", price: "$6" },
      ],
    },
  ],
  Lunch: [
    {
      category: "Starters",
      items: [
        { name: "California Steak Bites", price: "$21" },
        { name: "Tomato Bruschetta", price: "$15" },
        { name: "Chef's Jumbo Wings", price: "$15" },
        { name: "Garlic Lemon Pepper Calamari", price: "$18" },
        { name: "Fried Asparagus", price: "$16" },
        { name: "Ahi Poke Nachos", price: "$22" },
      ],
    },
    {
      category: "Salads",
      items: [
        { name: "Caesar Salad", price: "$12" },
        { name: "Gorgonzola Spinach Salad", price: "$14" },
        { name: "Grilled Romaine Heart Salad", price: "$14" },
        { name: "Signature Soup & Salad", price: "$17" },
      ],
    },
    {
      category: "Pizzas",
      items: [
        { name: "Margherita", price: "$16" },
        { name: "Pepperoni", price: "$15" },
        { name: "Buffalo Ranch Chicken", price: "$17" },
        { name: "BBQ Chicken", price: "$17" },
        { name: "Jalapeño Popper", price: "$17" },
        { name: "California Veggie", price: "$16" },
      ],
    },
    {
      category: "Specialties",
      items: [
        { name: "Open Face California Steak Sandwich", price: "$24" },
        { name: "Santa Maria Sous Vide Tri-Tip Sandwich", price: "$24" },
        { name: "Prime Rib French Dip", price: "$22" },
        { name: "Cedar Plank Salmon", price: "$21" },
        { name: "Fish & Chips", price: "$18" },
        { name: "Crispy Fish Tacos", price: "$16" },
      ],
    },
  ],
  Dinner: [
    {
      category: "Starters",
      items: [
        { name: "California Steak Bites", price: "$24" },
        { name: "Caprese Burrata", price: "$18" },
        { name: "Garlic Lemon Pepper Calamari", price: "$18" },
        { name: "Ahi Poke Nachos", price: "$22" },
        { name: "Crab Cakes Piccata", price: "$24" },
        { name: "Fried Brussel Sprouts", price: "$16" },
        { name: "French Onion Soup", price: "$12" },
      ],
    },
    {
      category: "Seafood",
      items: [
        { name: "Cold Water Lobster Tail", price: "$78" },
        { name: "Cioppino", price: "$58" },
        { name: "Fresh Alaskan Halibut", price: "$48" },
        { name: "Pan-Seared Atlantic Salmon", price: "$32" },
        { name: "Connecticut Style Lobster Roll", price: "$38" },
        { name: "Seafood Pasta Marina", price: "$52" },
      ],
    },
    {
      category: "Signature Entrées",
      items: [
        { name: "THE TOMAHAWK (46 oz)", price: "$148" },
        { name: "Surf & Turf", price: "$104" },
        { name: "Bacon-Wrapped Filet", price: "$52" },
        { name: "Ribeye Steak", price: "$52" },
        { name: "New York Steak", price: "$42" },
        { name: "Guinness Braised Short Ribs", price: "$42" },
        { name: "Prime Rib Au Jus (Fri & Sat)", price: "$48" },
        { name: "Chicken Marsala", price: "$30" },
        { name: "Chicken Piccata", price: "$30" },
        { name: "Frenched Pork Chop", price: "$42" },
      ],
    },
    {
      category: "Pasta",
      items: [
        { name: "California Penne Pasta", price: "$20" },
        { name: "Spicy Ketel One Vodka Pasta", price: "$20" },
        { name: "Brick Oven Pasta Rustica", price: "$24" },
      ],
    },
  ],
  Drinks: [
    {
      category: "Cocktails",
      items: [
        { name: "Woodford Rye Old Fashioned", price: "$12" },
        { name: "Spicy Black Manhattan", price: "$12" },
        { name: "The Negroni", price: "$12" },
        { name: "Jalapeño Pineapple Margarita", price: "$10" },
        { name: "Lavender Lemon Drop", price: "$10" },
        { name: "Cadillac Blood Orange Margarita", price: "$12" },
        { name: "The French 75", price: "$12" },
        { name: "Moscow Mule", price: "$10" },
        { name: "Mission Mimosa", price: "$18" },
        { name: "Chef's Bloody Mary", price: "$20" },
      ],
    },
    {
      category: "Wine by the Glass",
      items: [
        { name: "House Cabernet", price: "$8" },
        { name: "Rodney Strong Cabernet", price: "$16" },
        { name: "J. Vineyards Pinot Noir", price: "$12" },
        { name: "House Chardonnay", price: "$8" },
        { name: "Frank Family Chardonnay", price: "$12" },
        { name: "Duck Horn Chardonnay", price: "$16" },
        { name: "La Marca Prosecco", price: "$10" },
        { name: "Gloria Ferrer Champagne", price: "$14" },
      ],
    },
    {
      category: "Beer",
      items: [
        { name: "Beer Flight (4 draft)", price: "$10" },
        { name: "Lagunitas IPA (16oz)", price: "$6" },
        { name: "Firestone 805 Blonde Ale", price: "$6" },
        { name: "Blue Moon (16oz)", price: "$6" },
        { name: "Modelo Especial", price: "$5.50" },
        { name: "Corona", price: "$5.50" },
        { name: "Heineken", price: "$5.50" },
      ],
    },
  ],
};

const MENU_TABS = ["Breakfast", "Lunch", "Dinner", "Drinks"] as const;
type MenuTab = (typeof MENU_TABS)[number];

function MenuSection() {
  const ref = useFadeIn<HTMLElement>();
  const [activeTab, setActiveTab] = useState<MenuTab>("Dinner");

  return (
    <section
      id="menu"
      ref={ref}
      className="fade-in-up dark-section py-24 md:py-36"
      style={{ backgroundColor: "#1E120A" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="eyebrow text-gold mb-5 justify-center">
            Menu Highlights
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl font-bold text-cream"
            style={{ letterSpacing: "-0.025em" }}
          >
            Our Signature Dishes
          </h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/50" />
            <div className="w-1 h-1 rounded-full bg-gold/60" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </div>

        {/* Signature Dish Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 stagger">
          {DISHES.map((dish, i) => (
            <div
              key={dish.name}
              data-ocid={`menu.item.${i + 1}`}
              className="rounded-2xl overflow-hidden group cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(201,165,106,0.15)",
              }}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-gold text-charcoal text-xs font-sans font-bold px-2.5 py-1 rounded-full tracking-wide">
                  {dish.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <h3
                    className="font-serif font-bold text-lg text-cream"
                    style={{ letterSpacing: "-0.015em" }}
                  >
                    {dish.name}
                  </h3>
                  <span
                    className="font-serif font-bold text-xl shrink-0"
                    style={{ color: "#C9A56A" }}
                  >
                    {dish.price}
                  </span>
                </div>
                <p
                  className="font-sans text-sm leading-[1.8]"
                  style={{ color: "rgba(246,241,230,0.65)" }}
                >
                  {dish.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Full Menu Tabs */}
        <div>
          <div className="text-center mb-10">
            <p className="eyebrow text-gold mb-4 justify-center">Full Menu</p>
            <h3
              className="font-serif text-3xl md:text-4xl font-bold text-cream"
              style={{ letterSpacing: "-0.02em" }}
            >
              Explore Every Course
            </h3>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-gold/40" />
              <div className="w-1 h-1 rounded-full bg-gold/50" />
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-gold/40" />
            </div>
          </div>

          {/* Tab Buttons */}
          <div
            className="flex justify-center gap-2 mb-10 flex-wrap"
            data-ocid="menu.tab"
          >
            {MENU_TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className="font-sans font-semibold text-sm px-6 py-2 rounded-full transition-all duration-200"
                style={
                  activeTab === tab
                    ? {
                        background: "transparent",
                        border: "2px solid #C9A56A",
                        color: "#C9A56A",
                      }
                    : {
                        background: "rgba(255,255,255,0.05)",
                        border: "2px solid rgba(201,165,106,0.2)",
                        color: "rgba(246,241,230,0.5)",
                      }
                }
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(201,165,106,0.12)",
            }}
          >
            <div className="grid md:grid-cols-2">
              {MENU_DATA[activeTab].map((section, si) => (
                <div
                  key={section.category}
                  className="p-6 md:p-8"
                  style={{
                    borderBottom:
                      si < MENU_DATA[activeTab].length - 1
                        ? "1px solid rgba(201,165,106,0.08)"
                        : "none",
                    borderRight:
                      si % 2 === 0
                        ? "1px solid rgba(201,165,106,0.08)"
                        : "none",
                  }}
                >
                  <p
                    className="font-sans text-xs font-bold tracking-[0.18em] uppercase mb-5"
                    style={{ color: "rgba(201,165,106,0.7)" }}
                  >
                    {section.category}
                  </p>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-baseline justify-between gap-4"
                      >
                        <span
                          className="font-sans text-sm"
                          style={{ color: "rgba(246,241,230,0.82)" }}
                        >
                          {item.name}
                        </span>
                        <span
                          className="font-serif font-semibold text-sm shrink-0"
                          style={{ color: "#C9A56A" }}
                        >
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Disclaimer */}
          <p
            className="text-center font-sans text-xs mt-6 leading-relaxed max-w-xl mx-auto"
            style={{ color: "rgba(246,241,230,0.38)" }}
          >
            Consuming raw or undercooked meats may increase risk of foodborne
            illness. 18% service charge on parties of 8 or more.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-14">
          <Button
            data-ocid="menu.secondary_button"
            variant="outline"
            className="border-2 font-sans font-semibold rounded-full px-8"
            style={{
              borderColor: "rgba(201,165,106,0.5)",
              color: "#C9A56A",
              background: "transparent",
            }}
          >
            View Full Menu
          </Button>
          <a href="#contact">
            <Button
              data-ocid="menu.primary_button"
              className="bg-maroon hover:bg-maroon-dark text-cream font-sans font-semibold rounded-full px-8 border border-maroon-light/30"
            >
              Reserve a Table
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

function HoursSection() {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section
      id="hours"
      ref={ref}
      className="fade-in-up py-24 md:py-32"
      style={{ backgroundColor: "#F6F1E6" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="eyebrow text-maroon mb-5 justify-center">Visit Us</p>
          <h2
            className="font-serif text-4xl md:text-5xl text-charcoal font-bold"
            style={{ letterSpacing: "-0.025em" }}
          >
            Hours &amp; Location
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-0 bg-cream rounded-2xl shadow-card overflow-hidden">
          {/* Hours & Location */}
          <div className="p-8 lg:p-12 border-b md:border-b-0 md:border-r border-tan">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-maroon/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-maroon" />
              </div>
              <h3
                className="font-serif text-xl font-bold text-charcoal"
                style={{ letterSpacing: "-0.02em" }}
              >
                Hours
              </h3>
            </div>

            <div className="space-y-3 mb-8 font-sans">
              <div className="flex justify-between py-2 border-b border-tan">
                <span className="text-charcoal-light font-medium">
                  Sunday – Thursday
                </span>
                <span className="text-charcoal font-semibold">
                  7:00 AM – 9:00 PM
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-charcoal-light font-medium">
                  Friday – Saturday
                </span>
                <span className="text-charcoal font-semibold">
                  7:00 AM – 10:00 PM
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-5 h-5 text-maroon mt-0.5 shrink-0" />
              <div className="font-sans">
                <p className="text-charcoal font-semibold">13070 S Hwy 33</p>
                <p className="text-charcoal-light">Santa Nella, CA 95322</p>
              </div>
            </div>

            <p className="font-sans text-sm text-charcoal-light mb-6 pl-8">
              Conveniently located near Interstate 5, between San Francisco
              &amp; Los Angeles
            </p>

            <a
              href="https://maps.google.com/?q=13070+S+Hwy+33+Santa+Nella+CA+95322"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hours.primary_button"
            >
              <Button className="bg-maroon hover:bg-maroon-dark text-cream font-sans font-semibold rounded-full gap-2">
                <MapPin className="w-4 h-4" />
                Open in Maps
                <ExternalLink className="w-3.5 h-3.5" />
              </Button>
            </a>
          </div>

          {/* Contact */}
          <div className="p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-maroon/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-maroon" />
              </div>
              <h3
                className="font-serif text-xl font-bold text-charcoal"
                style={{ letterSpacing: "-0.02em" }}
              >
                Contact
              </h3>
            </div>

            <div className="space-y-4 mb-8 font-sans">
              <a
                href="tel:+12098297506"
                className="flex items-center gap-3 group"
              >
                <Phone className="w-4 h-4 text-maroon shrink-0" />
                <span className="text-charcoal group-hover:text-maroon transition-colors">
                  +1 (209) 829-7506
                </span>
              </a>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-maroon/60 shrink-0" />
                <span className="text-charcoal-light text-sm">
                  Hotel: (209) 826-4444
                </span>
              </div>
              <a
                href="mailto:frontdesk@hotelmissiondeoro.com"
                className="flex items-center gap-3 group"
              >
                <Mail className="w-4 h-4 text-maroon shrink-0" />
                <span className="text-charcoal group-hover:text-maroon transition-colors text-sm break-all">
                  frontdesk@hotelmissiondeoro.com
                </span>
              </a>
            </div>

            <div>
              <p className="font-sans text-xs font-semibold text-charcoal-light uppercase tracking-wider mb-3">
                Services
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Dine-In",
                  "Takeout",
                  "Reservations",
                  "Catering",
                  "Events",
                ].map((s) => (
                  <span
                    key={s}
                    className="font-sans text-xs px-3 py-1 rounded-full border border-tan text-charcoal-light bg-cream-dark"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const AMENITIES = [
  { icon: Car, label: "Free Parking" },
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Accessibility, label: "Wheelchair Accessible" },
  { icon: Baby, label: "Highchairs Available" },
  { icon: Wine, label: "Full Bar" },
  { icon: TreePine, label: "Outdoor Seating" },
  { icon: PawPrint, label: "Pet-Friendly Patio" },
  { icon: UtensilsCrossed, label: "Kids Menu" },
  { icon: Waves, label: "Water Features" },
  { icon: Umbrella, label: "Covered Patio" },
  { icon: CreditCard, label: "Credit Cards Accepted" },
  { icon: Users, label: "Family-Friendly" },
];

function AmenitiesSection() {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section
      id="amenities"
      ref={ref}
      className="fade-in-up py-24 md:py-32"
      style={{ backgroundColor: "#EDE5D5" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="eyebrow text-maroon mb-5 justify-center">
            What We Offer
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl text-charcoal font-bold"
            style={{ letterSpacing: "-0.025em" }}
          >
            Amenities &amp; Features
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {AMENITIES.map(({ icon: Icon, label }, i) => (
            <div
              key={label}
              data-ocid={`amenities.item.${i + 1}`}
              className="bg-cream rounded-xl p-4 flex flex-col items-center text-center gap-2.5 shadow-xs hover:shadow-card transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-11 h-11 rounded-full bg-maroon/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-maroon" />
              </div>
              <span className="font-sans text-sm font-medium text-charcoal">
                {label}
              </span>
            </div>
          ))}
        </div>

        <div
          className="bg-maroon rounded-2xl p-6 md:p-10 text-center text-cream"
          style={{
            background: "linear-gradient(135deg, #6B1F1F 0%, #511717 100%)",
          }}
        >
          <p className="font-sans text-xs font-semibold tracking-widest uppercase opacity-60 mb-3">
            Hotel Amenities
          </p>
          <p
            className="font-serif text-2xl md:text-3xl font-bold mb-3"
            style={{ letterSpacing: "-0.02em" }}
          >
            More to Explore at Hotel Mission De Oro
          </p>
          <p className="font-sans text-white/70 text-sm">
            As our guests, enjoy access to our Pool, Spa, Fitness Center, Wine
            Museum &amp; Art Collection
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Gallery ────────────────────────────────────────────────────────────────

const GALLERY_IMAGES = [
  "/assets/uploads/screenshot_20260323_112749-019d1de3-d8f0-75de-9dc5-cd3cbe9ba73e-1.jpg",
  "/assets/uploads/screenshot_20260323_112713-019d1de3-df61-7589-b7ad-36c0874fa897-2.jpg",
  "/assets/uploads/screenshot_20260323_112703-019d1de3-e26e-7112-ba92-0d86cdf7e183-3.jpg",
  "/assets/uploads/screenshot_20260323_112733-019d1de3-e432-727b-8699-22d04eb7da2d-4.jpg",
  "/assets/uploads/screenshot_20260323_112802-019d1de3-ebf4-72cc-864d-b342ae32b6f3-5.jpg",
  "/assets/uploads/screenshot_20260323_112741-019d1de3-ee1e-77ab-9f06-d00916df9149-6.jpg",
  "/assets/uploads/screenshot_20260323_112822-019d1de3-eeca-70e8-8293-8b177d58dd35-7.jpg",
  "/assets/uploads/screenshot_20260323_112809-019d1de3-efbf-743e-a6b2-6a4651b1c835-8.jpg",
  "/assets/uploads/screenshot_20260323_112816-019d1de3-efcd-750d-a616-5227ce63ece2-9.jpg",
  "/assets/uploads/screenshot_20260323_112718-019d1de3-f13e-72c7-b279-e3b7eeb52a9a-10.jpg",
  "/assets/uploads/screenshot_20260323_112847-019d1de3-f249-722c-9cfa-a9368a98e74f-11.jpg",
  "/assets/uploads/screenshot_20260323_112757-019d1de3-f240-734b-b547-948c0f57ce91-12.jpg",
  "/assets/uploads/screenshot_20260323_112828-019d1de3-f2ca-726f-a571-b730b8d8df1c-13.jpg",
  "/assets/uploads/screenshot_20260323_112842-019d1de3-f379-70eb-aa0a-c55c1a46f78a-14.jpg",
];

function GallerySection() {
  const ref = useFadeIn<HTMLElement>();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length,
    );
  };

  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length);
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft")
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length,
        );
      if (e.key === "ArrowRight")
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % GALLERY_IMAGES.length,
        );
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex]);

  return (
    <>
      <section
        id="gallery"
        ref={ref}
        className="fade-in-up py-24 md:py-32"
        style={{ backgroundColor: "#F6F1E6" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="eyebrow text-maroon mb-5 justify-center">Photos</p>
            <h2
              className="font-serif text-4xl md:text-5xl text-charcoal font-bold"
              style={{ letterSpacing: "-0.025em" }}
            >
              Our Gallery
            </h2>
            <div className="flex items-center justify-center gap-3 mt-5">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-maroon/40" />
              <div className="w-1 h-1 rounded-full bg-maroon/50" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-maroon/40" />
            </div>
            <p className="font-sans text-charcoal-light mt-5 max-w-lg mx-auto leading-relaxed">
              A glimpse into our food, atmosphere, and the warm spaces where
              memories are made.
            </p>
          </div>

          <div
            data-ocid="gallery.panel"
            className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3"
          >
            {GALLERY_IMAGES.map((src, i) => (
              <button
                key={src}
                type="button"
                data-ocid={`gallery.item.${i + 1}`}
                onClick={() => openLightbox(i)}
                className="block w-full break-inside-avoid rounded-xl overflow-hidden cursor-zoom-in group focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
                aria-label={`Open view ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`The Kitchen at The Mission - view ${i + 1}`}
                  className="w-full object-cover rounded-xl group-hover:scale-[1.02] transition-transform duration-500 group-hover:brightness-90"
                  loading="lazy"
                />
              </button>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#contact">
              <Button
                data-ocid="gallery.primary_button"
                className="bg-maroon hover:bg-maroon-dark text-cream font-sans font-semibold rounded-full px-8"
              >
                Reserve Your Experience
              </Button>
            </a>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            data-ocid="gallery.modal"
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ backgroundColor: "rgba(15,8,4,0.93)" }}
            onClick={closeLightbox}
          >
            <button
              type="button"
              data-ocid="gallery.close_button"
              onClick={closeLightbox}
              aria-label="Close gallery"
              className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              type="button"
              data-ocid="gallery.pagination_prev"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Previous photo"
              className="absolute left-4 z-10 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              data-ocid="gallery.pagination_next"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Next photo"
              className="absolute right-4 z-10 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl max-h-[85vh] mx-12 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={GALLERY_IMAGES[lightboxIndex]}
                alt={`The Kitchen at The Mission - view ${lightboxIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-sans text-sm text-white/50">
                {lightboxIndex + 1} / {GALLERY_IMAGES.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Reservation ─────────────────────────────────────────────────────────────

function ReservationSection() {
  const ref = useFadeIn<HTMLElement>();
  const { mutate: submitReservation, isPending } = useSubmitReservation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    partySize: "",
    specialRequests: "",
  });

  const handleChange =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.date ||
      !form.time ||
      !form.partySize
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const [year, month, day] = form.date.split("-").map(Number);
    const [hour, minute] = form.time.split(":").map(Number);

    submitReservation(
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        date: { year: BigInt(year), month: BigInt(month), day: BigInt(day) },
        time: { hour: BigInt(hour), minute: BigInt(minute) },
        partySize: BigInt(Number(form.partySize)),
        specialRequests: form.specialRequests,
      },
      {
        onSuccess: () => {
          toast.success("Reservation requested! We'll confirm shortly.");
          setForm({
            name: "",
            email: "",
            phone: "",
            date: "",
            time: "",
            partySize: "",
            specialRequests: "",
          });
        },
        onError: () => {
          toast.error("Something went wrong. Please call us directly.");
        },
      },
    );
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="fade-in-up py-24 md:py-32"
      style={{ backgroundColor: "#F6F1E6" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="eyebrow text-maroon mb-5 justify-center">
            Reservations
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl text-charcoal font-bold mb-4"
            style={{ letterSpacing: "-0.025em" }}
          >
            Book Your Table
          </h2>
          <p className="font-sans text-charcoal-light max-w-xl mx-auto leading-relaxed">
            For reservations, please call us or use the form below. For large
            groups or private events, contact us directly.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <div className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              data-ocid="contact.modal"
              className="bg-cream rounded-2xl p-6 md:p-8 shadow-card space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="res-name"
                    className="font-sans text-sm font-medium text-charcoal"
                  >
                    Full Name <span className="text-maroon">*</span>
                  </Label>
                  <Input
                    id="res-name"
                    data-ocid="contact.input"
                    value={form.name}
                    onChange={handleChange("name")}
                    placeholder="Jane Smith"
                    required
                    className="border-tan bg-cream-dark focus:border-maroon font-sans"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="res-email"
                    className="font-sans text-sm font-medium text-charcoal"
                  >
                    Email <span className="text-maroon">*</span>
                  </Label>
                  <Input
                    id="res-email"
                    type="email"
                    data-ocid="contact.input"
                    value={form.email}
                    onChange={handleChange("email")}
                    placeholder="jane@example.com"
                    required
                    className="border-tan bg-cream-dark focus:border-maroon font-sans"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="res-phone"
                    className="font-sans text-sm font-medium text-charcoal"
                  >
                    Phone
                  </Label>
                  <Input
                    id="res-phone"
                    type="tel"
                    data-ocid="contact.input"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    placeholder="+1 (555) 000-0000"
                    className="border-tan bg-cream-dark focus:border-maroon font-sans"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="res-date"
                    className="font-sans text-sm font-medium text-charcoal"
                  >
                    Date <span className="text-maroon">*</span>
                  </Label>
                  <Input
                    id="res-date"
                    type="date"
                    data-ocid="contact.input"
                    value={form.date}
                    onChange={handleChange("date")}
                    required
                    className="border-tan bg-cream-dark focus:border-maroon font-sans"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label className="font-sans text-sm font-medium text-charcoal">
                    Time <span className="text-maroon">*</span>
                  </Label>
                  <Select
                    value={form.time}
                    onValueChange={(v) =>
                      setForm((prev) => ({ ...prev, time: v }))
                    }
                  >
                    <SelectTrigger
                      data-ocid="contact.select"
                      className="border-tan bg-cream-dark font-sans"
                    >
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {[
                        "07:00",
                        "07:30",
                        "08:00",
                        "08:30",
                        "09:00",
                        "09:30",
                        "10:00",
                        "10:30",
                        "11:00",
                        "11:30",
                        "12:00",
                        "12:30",
                        "13:00",
                        "13:30",
                        "14:00",
                        "14:30",
                        "15:00",
                        "15:30",
                        "16:00",
                        "16:30",
                        "17:00",
                        "17:30",
                        "18:00",
                        "18:30",
                        "19:00",
                        "19:30",
                        "20:00",
                        "20:30",
                      ].map((t) => {
                        const [h, m] = t.split(":").map(Number);
                        const ampm = h < 12 ? "AM" : "PM";
                        const h12 = h % 12 || 12;
                        return (
                          <SelectItem key={t} value={t}>
                            {h12}:{m === 0 ? "00" : m} {ampm}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label className="font-sans text-sm font-medium text-charcoal">
                    Party Size <span className="text-maroon">*</span>
                  </Label>
                  <Select
                    value={form.partySize}
                    onValueChange={(v) =>
                      setForm((prev) => ({ ...prev, partySize: v }))
                    }
                  >
                    <SelectTrigger
                      data-ocid="contact.select"
                      className="border-tan bg-cream-dark font-sans"
                    >
                      <SelectValue placeholder="Guests" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                        <SelectItem key={n} value={String(n)}>
                          {n} {n === 1 ? "Guest" : "Guests"}
                        </SelectItem>
                      ))}
                      <SelectItem value="21">21+ Guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label
                  htmlFor="res-requests"
                  className="font-sans text-sm font-medium text-charcoal"
                >
                  Special Requests
                </Label>
                <Textarea
                  id="res-requests"
                  data-ocid="contact.textarea"
                  value={form.specialRequests}
                  onChange={handleChange("specialRequests")}
                  placeholder="Dietary needs, special occasions, seating preferences…"
                  rows={3}
                  className="border-tan bg-cream-dark focus:border-maroon font-sans resize-none"
                />
              </div>

              <Button
                type="submit"
                data-ocid="contact.submit_button"
                disabled={isPending}
                className="w-full bg-maroon hover:bg-maroon-dark text-cream font-sans font-semibold rounded-full py-3 text-base"
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />{" "}
                    Submitting…
                  </>
                ) : (
                  "Request Reservation"
                )}
              </Button>

              {isPending && (
                <p
                  data-ocid="contact.loading_state"
                  className="text-center text-sm text-charcoal-light font-sans"
                >
                  Sending your request…
                </p>
              )}
            </form>
          </div>

          {/* Contact card */}
          <div className="md:col-span-2 space-y-4">
            <div
              className="bg-maroon rounded-2xl p-6 text-cream"
              style={{
                background: "linear-gradient(135deg, #6B1F1F 0%, #511717 100%)",
              }}
            >
              <h3
                className="font-serif text-xl font-bold mb-5"
                style={{ letterSpacing: "-0.02em" }}
              >
                Contact Us Directly
              </h3>
              <div className="space-y-4 font-sans">
                <a
                  href="tel:+12098297506"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs opacity-70">Restaurant</p>
                    <p className="font-semibold group-hover:text-gold transition-colors">
                      +1 (209) 829-7506
                    </p>
                  </div>
                </a>
                <a
                  href="mailto:frontdesk@hotelmissiondeoro.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs opacity-70">Email</p>
                    <p className="font-semibold text-sm group-hover:text-gold transition-colors break-all">
                      frontdesk@hotelmissiondeoro.com
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-cream rounded-2xl p-6 shadow-card">
              <h3
                className="font-serif text-lg font-bold text-charcoal mb-4"
                style={{ letterSpacing: "-0.02em" }}
              >
                Hours
              </h3>
              <div className="font-sans space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-charcoal-light">Sun – Thu</span>
                  <span className="font-semibold text-charcoal">7AM – 9PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-light">Fri – Sat</span>
                  <span className="font-semibold text-charcoal">
                    7AM – 10PM
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-cream rounded-2xl p-6 shadow-card">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-maroon mt-1 shrink-0" />
                <div className="font-sans text-sm">
                  <p className="font-semibold text-charcoal">13070 S Hwy 33</p>
                  <p className="text-charcoal-light">Santa Nella, CA 95322</p>
                  <p className="text-charcoal-light text-xs mt-1">
                    Near I-5 · Between SF & LA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer style={{ backgroundColor: "#1E120A" }} className="text-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <p
                className="font-serif font-bold text-2xl text-cream"
                style={{ letterSpacing: "-0.03em" }}
              >
                The Kitchen
              </p>
              <p className="font-sans text-[10px] tracking-[0.28em] text-cream/50 font-semibold uppercase">
                AT THE MISSION
              </p>
            </div>
            <p
              className="font-sans text-sm leading-[1.85]"
              style={{ color: "rgba(246,241,230,0.6)" }}
            >
              California-style cuisine with warmth and care, inside Hotel
              Mission De Oro.
            </p>
            <div className="flex items-start gap-2 mt-4">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div
                className="font-sans text-xs"
                style={{ color: "rgba(246,241,230,0.6)" }}
              >
                <p>13070 S Hwy 33</p>
                <p>Santa Nella, CA 95322</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-5">
              Quick Links
            </p>
            <ul className="space-y-3">
              {[
                { href: "#about", label: "About" },
                { href: "#menu", label: "Menu" },
                { href: "#gallery", label: "Gallery" },
                { href: "#hours", label: "Hours & Location" },
                { href: "#amenities", label: "Amenities" },
                { href: "#contact", label: "Reservations" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    data-ocid="footer.link"
                    className="font-sans text-sm transition-colors"
                    style={{ color: "rgba(246,241,230,0.6)" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-5">
              Get in Touch
            </p>
            <div
              className="space-y-3 font-sans text-sm"
              style={{ color: "rgba(246,241,230,0.6)" }}
            >
              <a
                href="tel:+12098297506"
                className="flex items-center gap-2 hover:text-cream transition-colors"
              >
                <Phone className="w-4 h-4 text-gold" />
                +1 (209) 829-7506
              </a>
              <a
                href="mailto:frontdesk@hotelmissiondeoro.com"
                className="flex items-center gap-2 hover:text-cream transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-gold shrink-0" />
                frontdesk@hotelmissiondeoro.com
              </a>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span>Open Daily 7:00 AM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p
            className="font-sans text-xs"
            style={{ color: "rgba(246,241,230,0.35)" }}
          >
            © {year} The Kitchen at The Mission. Part of Hotel Mission De Oro.
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs transition-colors"
            style={{ color: "rgba(246,241,230,0.3)" }}
          >
            Built with ♥ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollTop}
      data-ocid="nav.button"
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-maroon text-cream shadow-lg hover:bg-maroon-dark flex items-center justify-center transition-colors"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <HoursSection />
        <AmenitiesSection />
        <GallerySection />
        <ReservationSection />
      </main>
      <Footer />
      <BackToTop />
      <Toaster richColors />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}
