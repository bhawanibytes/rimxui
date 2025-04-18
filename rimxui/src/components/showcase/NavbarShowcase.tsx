import { NavbarPosition, NavbarVariant } from "@/types";
import {
  Bell,
  ChevronDown,
  Heart,
  Home,
  Mail,
  Menu,
  Search,
  ShoppingCart,
  Star,
  User,
} from "lucide-react";
import { useState } from "react";
import { Box, Flex } from "../Layout";
import { Navbar } from "../Navbar/Navbar";
import PreviewWrapper from "../PreviewWrapper";
import { Typography } from "../Typography";
import {
  ShowcaseAPIReference,
  ShowcaseGuidelines,
  ShowcaseHeader,
} from "./common";

export const NavbarShowcase = () => {
  const NAVBAR_VARIANTS: Array<NavbarVariant> = [
    "default",
    "centered",
    "gradient",
  ];

  const NAVBAR_POSITIONS: Array<NavbarPosition> = [
    "static",
    "fixed-top",
    "sticky-top",
  ];

  const renderIntroduction = () => (
    <div className="space-y-6">
      <ShowcaseHeader
        title="Navbar"
        description="A versatile navigation component for applications, offering multiple variants, responsive behavior, and extensive customization options."
      />
      <PreviewWrapper
        label="Basic Usage"
        preview={
          <Navbar
            variant="default"
            brand={{ text: "Rimxui", href: "/" }}
            leftLinks={[
              { href: "#home", label: "Home", isActive: true },
              { href: "#about", label: "About" },
              { href: "#services", label: "Services" },
              { href: "#contact", label: "Contact" },
            ]}
            rounded="xl"
          />
        }
        code={`
<Navbar
  variant="default"
  brand={{ text: "Rimxui", href: "/" }}
  leftLinks={[
    { href: "#home", label: "Home", isActive: true },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ]}
  rounded="xl"
/>
        `}
      />
    </div>
  );

  const renderVariants = () => (
    <div className="space-y-8">
      <Typography type="heading" level={2} variant="default" size="xl">
        Navbar Variants
      </Typography>
      <Typography type="text" variant="secondary" size="md" className="mt-2">
        Navbars come in different variants to match your design needs.
      </Typography>

      <div className="space-y-6">
        {NAVBAR_VARIANTS.map((variant) => (
          <PreviewWrapper
            key={variant}
            label={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Navbar`}
            preview={
              <Navbar
                variant={variant}
                brand={{ text: "Rimxui", href: "/" }}
                leftLinks={[
                  { href: "#home", label: "Home", isActive: true },
                  { href: "#about", label: "About" },
                  { href: "#services", label: "Services" },
                ]}
                rightLinks={
                  variant === "centered"
                    ? []
                    : [
                        {
                          href: "#get-started",
                          label: "Get Started",
                          isButton: true,
                          buttonVariant: "primary",
                        },
                      ]
                }
                centerLinks={
                  variant === "centered"
                    ? [
                        { href: "#features", label: "Features" },
                        { href: "#pricing", label: "Pricing" },
                      ]
                    : []
                }
                rounded="xl"
              />
            }
            code={`
<Navbar
  variant="${variant}"
  brand={{ text: "Rimxui", href: "/" }}
  leftLinks={[
    { href: "#home", label: "Home", isActive: true },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
  ]}
  ${
    variant !== "centered"
      ? `rightLinks={[
    {
      href: "#get-started",
      label: "Get Started",
      isButton: true,
      buttonVariant: "primary",
    },
  ]}`
      : `centerLinks={[
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
  ]}`
  }
  rounded="xl"
/>
            `}
          />
        ))}
      </div>
    </div>
  );

  const renderPositions = () => (
    <div className="space-y-8">
      <Typography type="heading" level={2} variant="default" size="xl">
        Navbar Positions
      </Typography>
      <Typography type="text" variant="secondary" size="md" className="mt-2">
        Navbars can be positioned in different ways on the page.
      </Typography>

      <div className="space-y-6">
        {NAVBAR_POSITIONS.map((position) => (
          <PreviewWrapper
            key={position}
            label={`Position: ${position}`}
            preview={
              <Navbar
                position={position}
                brand={{ text: "Rimxui", href: "/" }}
                leftLinks={[
                  { href: "#home", label: "Home", isActive: true },
                  { href: "#about", label: "About" },
                ]}
                rightLinks={[
                  {
                    href: "#login",
                    label: "Login",
                    isButton: true,
                    buttonVariant: "outline",
                  },
                ]}
                rounded="xl"
              />
            }
            code={`
<Navbar
  position="${position}"
  brand={{ text: "Rimxui", href: "/" }}
  leftLinks={[
    { href: "#home", label: "Home", isActive: true },
    { href: "#about", label: "About" },
  ]}
  rightLinks={[
    {
      href: "#login",
      label: "Login",
      isButton: true,
      buttonVariant: "outline",
    },
  ]}
  rounded="xl"
/>
            `}
          />
        ))}
      </div>
    </div>
  );

  const renderFeatures = () => (
    <div className="space-y-8">
      <Typography type="heading" level={2} variant="default" size="xl">
        Navbar Features
      </Typography>

      <div className="space-y-6">
        <div>
          <Typography type="heading" level={3} variant="default" size="lg">
            With Search
          </Typography>
          <PreviewWrapper
            label="Search Input"
            preview={
              <Navbar
                variant="default"
                brand={{ text: "Rimxui", href: "/" }}
                leftLinks={[
                  { href: "#home", label: "Home", isActive: true },
                  { href: "#shop", label: "Shop" },
                ]}
                searchInput={true}
                searchPlaceholder="Search products..."
                onSearch={(value) => console.log("Searching for:", value)}
                rounded="xl"
              />
            }
            code={`
<Navbar
  variant="default"
  brand={{ text: "Rimxui", href: "/" }}
  leftLinks={[
    { href: "#home", label: "Home", isActive: true },
    { href: "#shop", label: "Shop" },
  ]}
  searchInput={true}
  searchPlaceholder="Search products..."
  onSearch={(value) => console.log("Searching for:", value)}
  rounded="xl"
/>
            `}
          />
        </div>

        <div>
          <Typography type="heading" level={3} variant="default" size="lg">
            With Custom Links
          </Typography>
          <PreviewWrapper
            label="Button Links"
            preview={
              <Navbar
                variant="default"
                brand={{ text: "Rimxui", href: "/" }}
                leftLinks={[
                  { href: "#home", label: "Home", isActive: true },
                  { href: "#features", label: "Features" },
                ]}
                rightLinks={[
                  {
                    href: "#signup",
                    label: "Sign Up",
                    isButton: true,
                    buttonVariant: "outline",
                  },
                  {
                    href: "#login",
                    label: "Login",
                    isButton: true,
                    buttonVariant: "primary",
                  },
                ]}
                rounded="xl"
              />
            }
            code={`
<Navbar
  variant="default"
  brand={{ text: "Rimxui", href: "/" }}
  leftLinks={[
    { href: "#home", label: "Home", isActive: true },
    { href: "#features", label: "Features" },
  ]}
  rightLinks={[
    {
      href: "#signup",
      label: "Sign Up",
      isButton: true,
      buttonVariant: "outline",
    },
    {
      href: "#login",
      label: "Login",
      isButton: true,
      buttonVariant: "primary",
    },
  ]}
  rounded="xl"
/>
            `}
          />
        </div>

        <div>
          <Typography type="heading" level={3} variant="default" size="lg">
            Mobile Breakpoints
          </Typography>
          <PreviewWrapper
            label="Custom Breakpoint"
            preview={
              <Navbar
                variant="default"
                brand={{ text: "Rimxui", href: "/" }}
                leftLinks={[
                  { href: "#home", label: "Home", isActive: true },
                  { href: "#about", label: "About" },
                  { href: "#services", label: "Services" },
                ]}
                mobileBreakpoint="lg"
                rounded="xl"
              />
            }
            code={`
<Navbar
  variant="default"
  brand={{ text: "Rimxui", href: "/" }}
  leftLinks={[
    { href: "#home", label: "Home", isActive: true },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
  ]}
  mobileBreakpoint="lg"
  rounded="xl"
/>
            `}
          />
        </div>
      </div>
    </div>
  );

  const renderCustomization = () => (
    <div className="space-y-8">
      <Typography type="heading" level={2} variant="default" size="xl">
        Custom Navbars
      </Typography>
      <Typography type="text" variant="secondary" size="md" className="mt-2">
        Customize your navbar with additional components and styling.
      </Typography>

      <div className="space-y-6">
        <div>
          <Typography type="heading" level={3} variant="default" size="lg">
            With Icons
          </Typography>
          <PreviewWrapper
            label="Icon Links"
            preview={
              <Navbar
                variant="default"
                brand={{ text: "Rimxui", href: "/" }}
                leftLinks={[
                  {
                    href: "#home",
                    label: "Home",
                    isActive: true,
                    icon: <Home size={16} />,
                  },
                  {
                    href: "#features",
                    label: "Features",
                    icon: <Star size={16} />,
                  },
                ]}
                afterLinks={
                  <Flex gap="4">
                    <button className="text-gray-700 hover:text-blue-500">
                      <Bell size={20} />
                    </button>
                    <button className="text-gray-700 hover:text-blue-500">
                      <Mail size={20} />
                    </button>
                    <button className="text-gray-700 hover:text-blue-500">
                      <User size={20} />
                    </button>
                  </Flex>
                }
                rounded="xl"
              />
            }
            code={`
<Navbar
  variant="default"
  brand={{ text: "Rimxui", href: "/" }}
  leftLinks={[
    { 
      href: "#home", 
      label: "Home", 
      isActive: true,
      icon: <Home size={16} /> 
    },
    { 
      href: "#features", 
      label: "Features",
      icon: <Star size={16} />  
    },
  ]}
  afterLinks={
    <Flex gap="4">
      <button className="text-gray-700 hover:text-blue-500">
        <Bell size={20} />
      </button>
      <button className="text-gray-700 hover:text-blue-500">
        <Mail size={20} />
      </button>
      <button className="text-gray-700 hover:text-blue-500">
        <User size={20} />
      </button>
    </Flex>
  }
  rounded="xl"
/>
            `}
          />
        </div>

        <div>
          <Typography type="heading" level={3} variant="default" size="lg">
            E-commerce Navbar
          </Typography>
          <PreviewWrapper
            label="E-commerce Example"
            preview={
              <Navbar
                variant="default"
                brand={{ text: "ShopUI", href: "/" }}
                leftLinks={[
                  { href: "#home", label: "Home", isActive: true },
                  { href: "#categories", label: "Categories" },
                  { href: "#new", label: "New Arrivals" },
                  { href: "#sale", label: "Sale" },
                ]}
                afterLinks={
                  <Flex gap="4" align="center">
                    <button className="text-gray-700 hover:text-blue-500">
                      <Search size={20} />
                    </button>
                    <button className="text-gray-700 hover:text-blue-500">
                      <Heart size={20} />
                    </button>
                    <button className="text-gray-700 hover:text-blue-500 relative">
                      <ShoppingCart size={20} />
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                        3
                      </span>
                    </button>
                    <button className="text-gray-700 hover:text-blue-500">
                      <User size={20} />
                    </button>
                  </Flex>
                }
                rounded="xl"
                shadow="sm"
              />
            }
            code={`
<Navbar
  variant="default"
  brand={{ text: "ShopUI", href: "/" }}
  leftLinks={[
    { href: "#home", label: "Home", isActive: true },
    { href: "#categories", label: "Categories" },
    { href: "#new", label: "New Arrivals" },
    { href: "#sale", label: "Sale" },
  ]}
  afterLinks={
    <Flex gap="4" align="center">
      <button className="text-gray-700 hover:text-blue-500">
        <Search size={20} />
      </button>
      <button className="text-gray-700 hover:text-blue-500">
        <Heart size={20} />
      </button>
      <button className="text-gray-700 hover:text-blue-500 relative">
        <ShoppingCart size={20} />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
          3
        </span>
      </button>
      <button className="text-gray-700 hover:text-blue-500">
        <User size={20} />
      </button>
    </Flex>
  }
  rounded="xl"
  shadow="sm"
/>
            `}
          />
        </div>
      </div>
    </div>
  );

  const AdvancedDropdownExample = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    return (
      <PreviewWrapper
        label="Advanced Navbar with Dropdown"
        preview={
          <Navbar
            position="static"
            maxW="full"
            shadow="md"
            bg="white"
            rounded="lg"
            beforeLinks={
              <div className="flex items-center">
                <img src="/logo.svg" alt="Logo" className="h-8 w-auto mr-2" />
                <Typography
                  type="heading"
                  level={4}
                  color="primary"
                  className="mb-0"
                >
                  Rimxui Pro
                </Typography>
              </div>
            }
            leftLinks={[
              { href: "#features", label: "Features" },
              { href: "#pricing", label: "Pricing" },
            ]}
            rightLinks={[
              { href: "#docs", label: "Documentation" },
              { href: "#support", label: "Support" },
              {
                href: "#contact",
                label: "Contact Us",
                isButton: true,
                buttonVariant: "outline",
              },
            ]}
            afterLinks={
              <Flex gap="4" align="center">
                <Box className="relative">
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={toggleDropdown}
                  >
                    Products <ChevronDown size={16} className="ml-1" />
                  </div>

                  {isDropdownOpen && (
                    <Box
                      className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white"
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      <Box className="py-1">
                        <a href="#product1" className="block px-4 py-2">
                          Product One
                        </a>
                        <a href="#product2" className="block px-4 py-2">
                          Product Two
                        </a>
                        <a href="#product3" className="block px-4 py-2">
                          Product Three
                        </a>
                      </Box>
                    </Box>
                  )}
                </Box>

                {/* Custom icons */}
                <button
                  aria-label="Search"
                  className="text-gray-600 hover:text-blue-500"
                >
                  <Search size={20} />
                </button>
                <button
                  aria-label="User profile"
                  className="text-gray-600 hover:text-blue-500"
                >
                  <User size={20} />
                </button>
                <button
                  aria-label="Shopping cart"
                  className="text-gray-600 hover:text-blue-500 relative"
                >
                  <ShoppingCart size={20} />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                    3
                  </span>
                </button>
              </Flex>
            }
          />
        }
        code={`
const [isDropdownOpen, setIsDropdownOpen] = useState(false);

const toggleDropdown = () => {
  setIsDropdownOpen(!isDropdownOpen);
};

<Navbar
  position="static"
  maxW="full"
  shadow="md"
  bg="white"
  rounded="lg"
  beforeLinks={
    <div className="flex items-center">
      <img src="/logo.svg" alt="Logo" className="h-8 w-auto mr-2" />
      <Typography type="heading" level={4} color="primary" className="mb-0">
        Rimxui Pro
      </Typography>
    </div>
  }
  leftLinks={[
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
  ]}
  rightLinks={[
    { href: "#docs", label: "Documentation" },
    { href: "#support", label: "Support" },
    { 
      href: "#contact", 
      label: "Contact Us",
      isButton: true, 
      buttonVariant: "outline" 
    },
  ]}
  afterLinks={
    <Flex gap="4" align="center">
      <Box className="relative">
        <div
          className="flex items-center cursor-pointer"
          onClick={toggleDropdown}
        >
          Products <ChevronDown size={16} className="ml-1" />
        </div>
        
        {isDropdownOpen && (
          <Box
            className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white"
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Box className="py-1">
              <a href="#product1" className="block px-4 py-2">
                Product One
              </a>
              <a href="#product2" className="block px-4 py-2">
                Product Two
              </a>
              <a href="#product3" className="block px-4 py-2">
                Product Three
              </a>
            </Box>
          </Box>
        )}
      </Box>
      
      {/* Custom icons */}
      <button aria-label="Search" className="text-gray-600 hover:text-blue-500">
        <Search size={20} />
      </button>
      <button aria-label="User profile" className="text-gray-600 hover:text-blue-500">
        <User size={20} />
      </button>
      <button aria-label="Shopping cart" className="text-gray-600 hover:text-blue-500 relative">
        <ShoppingCart size={20} />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
          3
        </span>
      </button>
    </Flex>
  }
/>
        `}
      />
    );
  };

  const renderComplexExamples = () => (
    <div className="space-y-8">
      <Typography type="heading" level={2} variant="default" size="xl">
        Advanced Examples
      </Typography>
      <Typography type="text" variant="secondary" size="md" className="mt-2">
        Complex navbar implementations for specific use cases.
      </Typography>

      <div className="space-y-6">
        <AdvancedDropdownExample />

        <div>
          <Typography type="heading" level={3} variant="default" size="lg">
            Admin Dashboard Navbar
          </Typography>
          <PreviewWrapper
            label="Admin Dashboard"
            preview={
              <Navbar
                variant="default"
                position="sticky-top"
                maxW="full"
                brand={{ text: "Admin Dashboard", href: "/" }}
                bg="white"
                shadow="md"
                beforeLinks={
                  <button className="mr-4 text-gray-700">
                    <Menu size={24} />
                  </button>
                }
                leftLinks={[]}
                afterLinks={
                  <Flex gap="4" align="center">
                    <button className="text-gray-700 hover:text-blue-500">
                      <Search size={20} />
                    </button>
                    <button className="text-gray-700 hover:text-blue-500 relative">
                      <Bell size={20} />
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                        5
                      </span>
                    </button>
                    <Box className="flex items-center">
                      <img
                        src="/avatar.jpg"
                        alt="User"
                        className="h-8 w-8 rounded-full mr-2"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://via.placeholder.com/40";
                        }}
                      />
                      <Typography
                        type="text"
                        variant="default"
                        size="sm"
                        className="hidden sm:block"
                      >
                        Admin User
                      </Typography>
                    </Box>
                  </Flex>
                }
                rounded="none"
              />
            }
            code={`
<Navbar
  variant="default"
  position="sticky-top"
  maxW="full"
  brand={{ text: "Admin Dashboard", href: "/" }}
  bg="white"
  shadow="md"
  beforeLinks={
    <button className="mr-4 text-gray-700">
      <Menu size={24} />
    </button>
  }
  leftLinks={[]}
  afterLinks={
    <Flex gap="4" align="center">
      <button className="text-gray-700 hover:text-blue-500">
        <Search size={20} />
      </button>
      <button className="text-gray-700 hover:text-blue-500 relative">
        <Bell size={20} />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
          5
        </span>
      </button>
      <Box className="flex items-center">
        <img 
          src="/avatar.jpg" 
          alt="User" 
          className="h-8 w-8 rounded-full mr-2"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://via.placeholder.com/40";
          }}
        />
        <Typography type="text" variant="default" size="sm" className="hidden sm:block">
          Admin User
        </Typography>
      </Box>
    </Flex>
  }
  rounded="none"
/>
            `}
          />
        </div>
      </div>
    </div>
  );

  const renderResponsiveExamples = () => (
    <div className="space-y-8">
      <Typography type="heading" level={2} variant="default" size="xl">
        Responsive Behavior
      </Typography>
      <Typography type="text" variant="secondary" size="md" className="mt-2">
        The Navbar component is fully responsive and adapts to different screen
        sizes.
      </Typography>

      <div className="space-y-6">
        <PreviewWrapper
          label="Different Breakpoints"
          preview={
            <div className="space-y-4">
              <Typography type="text" variant="default" size="md">
                Resize your browser window to see how these navbars respond
                differently:
              </Typography>
              <div className="space-y-8">
                <div>
                  <Typography type="text" variant="secondary" size="sm">
                    Small ("sm") breakpoint:
                  </Typography>
                  <Navbar
                    variant="default"
                    brand={{ text: "Small" }}
                    leftLinks={[
                      { href: "#home", label: "Home", isActive: true },
                      { href: "#about", label: "About" },
                      { href: "#contact", label: "Contact" },
                    ]}
                    mobileBreakpoint="sm"
                    rounded="lg"
                  />
                </div>
                <div>
                  <Typography type="text" variant="secondary" size="sm">
                    Large ("lg") breakpoint:
                  </Typography>
                  <Navbar
                    variant="default"
                    brand={{ text: "Large" }}
                    leftLinks={[
                      { href: "#home", label: "Home", isActive: true },
                      { href: "#about", label: "About" },
                      { href: "#contact", label: "Contact" },
                    ]}
                    mobileBreakpoint="lg"
                    rounded="lg"
                  />
                </div>
              </div>
            </div>
          }
          code={`
// Small ("sm") breakpoint
<Navbar
  variant="default"
  brand={{ text: "Small" }}
  leftLinks={[
    { href: "#home", label: "Home", isActive: true },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]}
  mobileBreakpoint="sm"
  rounded="lg"
/>

// Large ("lg") breakpoint
<Navbar
  variant="default"
  brand={{ text: "Large" }}
  leftLinks={[
    { href: "#home", label: "Home", isActive: true },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]}
  mobileBreakpoint="lg"
  rounded="lg"
/>
          `}
        />
      </div>
    </div>
  );

  const renderGuidelines = () => {
    const bestPractices = [
      {
        title: "Keep it Simple",
        description:
          "Include only essential links to avoid overwhelming users. Too many options can lead to decision fatigue.",
      },
      {
        title: "Maintain Consistency",
        description:
          "Use the same navbar variant across your application to ensure a consistent user experience.",
      },
      {
        title: "Highlight Active State",
        description:
          "Always indicate the current active page/section to help users understand where they are.",
      },
    ];

    const thingsToAvoid = [
      {
        title: "Overcrowding",
        description:
          "Avoid adding too many items to your navbar. Consider using dropdowns for related links instead.",
      },
      {
        title: "Inconsistent Positioning",
        description:
          "Don't change navbar positions between pages unless there's a specific UX requirement.",
      },
      {
        title: "Small Touch Targets",
        description:
          "Ensure navbar items have adequate spacing for comfortable clicking or tapping on mobile devices.",
      },
    ];

    return (
      <ShowcaseGuidelines
        title="Navbar Guidelines"
        description="Follow these guidelines to create effective and user-friendly navigation experiences."
        bestPractices={bestPractices}
        thingsToAvoid={thingsToAvoid}
      />
    );
  };

  const renderAPIReference = () => {
    const navbarProps = [
      {
        name: "variant",
        type: '"default" | "centered" | "gradient"',
        defaultValue: '"default"',
        description: "Visual style variant of the navbar.",
      },
      {
        name: "position",
        type: '"fixed-top" | "sticky-top" | "static"',
        defaultValue: '"static"',
        description: "Position behavior of the navbar on the page.",
      },
      {
        name: "brand",
        type: "NavbarBrandProps",
        defaultValue: "undefined",
        description: "Configuration for the brand/logo section.",
      },
      {
        name: "leftLinks",
        type: "NavbarLinkItem[]",
        defaultValue: "[]",
        description: "Array of links to display on the left side.",
      },
      {
        name: "rightLinks",
        type: "NavbarLinkItem[]",
        defaultValue: "[]",
        description: "Array of links to display on the right side.",
      },
      {
        name: "centerLinks",
        type: "NavbarLinkItem[]",
        defaultValue: "[]",
        description:
          "Array of links to display in the center (for centered variant).",
      },
      {
        name: "searchInput",
        type: "boolean",
        defaultValue: "false",
        description: "Whether to show a search input in the navbar.",
      },
      {
        name: "searchPlaceholder",
        type: "string",
        defaultValue: '"Search..."',
        description: "Placeholder text for the search input.",
      },
      {
        name: "onSearch",
        type: "(value: string) => void",
        defaultValue: "undefined",
        description: "Function called when the search input value changes.",
      },
      {
        name: "beforeLinks",
        type: "ReactNode",
        defaultValue: "undefined",
        description: "Custom content to display before the links section.",
      },
      {
        name: "afterLinks",
        type: "ReactNode",
        defaultValue: "undefined",
        description: "Custom content to display after the links section.",
      },
      {
        name: "mobileBreakpoint",
        type: '"sm" | "md" | "lg" | "xl" | "2xl"',
        defaultValue: '"md"',
        description:
          "Breakpoint at which to switch between mobile and desktop views.",
      },
      {
        name: "collapsible",
        type: "boolean",
        defaultValue: "true",
        description:
          "Whether the navbar should collapse to a mobile menu on smaller screens.",
      },
      {
        name: "collapseOnSelect",
        type: "boolean",
        defaultValue: "true",
        description:
          "Whether to collapse the mobile menu after a link is selected.",
      },
      {
        name: "transparent",
        type: "boolean",
        defaultValue: "false",
        description: "Whether the navbar should have a transparent background.",
      },
    ];

    const linkItemProps = [
      {
        name: "href",
        type: "string",
        defaultValue: "required",
        description: "URL for the link.",
      },
      {
        name: "label",
        type: "string",
        defaultValue: "required",
        description: "Text to display for the link.",
      },
      {
        name: "icon",
        type: "ReactNode",
        defaultValue: "undefined",
        description: "Optional icon to display alongside the link text.",
      },
      {
        name: "isActive",
        type: "boolean",
        defaultValue: "false",
        description: "Whether the link represents the current page/section.",
      },
      {
        name: "isButton",
        type: "boolean",
        defaultValue: "false",
        description: "Whether to render the link as a button.",
      },
      {
        name: "buttonVariant",
        type: '"primary" | "secondary" | "outline"',
        defaultValue: '"primary"',
        description: "Button style when isButton is true.",
      },
      {
        name: "onClick",
        type: "() => void",
        defaultValue: "undefined",
        description: "Function to call when the link is clicked.",
      },
    ];

    const brandProps = [
      {
        name: "logo",
        type: "ReactNode",
        defaultValue: "undefined",
        description: "Custom logo element to display in the brand section.",
      },
      {
        name: "text",
        type: "string",
        defaultValue: "undefined",
        description: "Text to display as the brand name.",
      },
      {
        name: "href",
        type: "string",
        defaultValue: '"/"',
        description: "URL for the brand link.",
      },
    ];

    return (
      <ShowcaseAPIReference
        title="API Reference"
        propTables={[
          {
            title: "Navbar Props",
            props: navbarProps,
          },
          {
            title: "NavbarLinkItem Props",
            props: linkItemProps,
          },
          {
            title: "NavbarBrandProps",
            props: brandProps,
          },
        ]}
      />
    );
  };

  return (
    <div className="space-y-16 py-8">
      {renderIntroduction()}
      {renderVariants()}
      {renderPositions()}
      {renderFeatures()}
      {renderCustomization()}
      {renderComplexExamples()}
      {renderResponsiveExamples()}
      {renderGuidelines()}
      {renderAPIReference()}
    </div>
  );
};
