import { Box, Flex, Stack, Typography } from "@/components";
import Chip from "@/components/Chips/chips";
import { Link } from "react-router-dom";
import DarkModeToggle from "@/components/DarkMode/dark";
import { Github, Linkedin, Twitter } from "lucide-react";
import { ReactNode } from "react";

interface ShowcasePageLayoutProps {
  children: ReactNode;
}

export const ShowcasePageLayout: React.FC<ShowcasePageLayoutProps> = ({
  children,
}) => (
  <Stack height="screen" width="screen" bg="primary-50">
    <Flex
      as="header"
      width="full"
      justify="center"
      align="center"
      className="dark:text-black text-center bg-blue-200"
      py="1"
    >
      <Typography size="lg" variant="dark">
        This site is currently in Beta version. 🚀
      </Typography>
    </Flex>
    <Box as="nav" height="[60px]" width="full">
      <Flex
        width="full"
        height="full"
        justify="between"
        align="center"
        maxW="[1920px]"
        mx="auto"
        px="3"
        py="4"
        className="md:justify-around"
      >
        <Flex gap="4">
          <RiMXLogo />
          <Chip>version 1.0.0 🔥</Chip>
        </Flex>
        <Flex align="center" gap="6" className="hidden md:flex">
          <Typography
            as={Link}
            href="/docs"
            type="link"
            className="hover:text-blue-500 dark:text-gray-300 text-gray-600"
          >
            Docs
          </Typography>
          <Typography
            as={Link}
            href="/showcase"
            type="link"
            className="hover:text-blue-500 dark:text-gray-300 text-gray-600"
          >
            Components
          </Typography>
          <DarkModeToggle />
          <Chip color="gray">
            <Link
              to="https://github.com/bhawanibytes/rimxui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
            </Link>
          </Chip>
        </Flex>
      </Flex>
    </Box>

    <Box
      className="flex-1"
      maxW="[1920px]"
      width="full"
      mx="auto"
      px="3"
      py="4"
    >
      {children}
    </Box>

    <Flex
      as="footer"
      width="full"
      direction="col"
      className="relative z-10 backdrop-blur-xl bg-white/10 dark:bg-zinc-900/30 border-t border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 py-10 rounded-t-2xl shadow-2xl"
    >
      <Flex
        maxW="[1920px]"
        width="full"
        mx="auto"
        px="6"
        gap="8"
        className="grid grid-cols-1 md:grid-cols-3"
      >
        {/* Branding */}
        <Box>
          <Typography
            as={Link}
            href="/"
            size="xl"
            type="link"
            className="bg-gradient-to-b from-zinc-300 to-zinc-900 bg-clip-text text-transparent"
          >
            R
            <Typography size="xl" type="inline" color="red">
              i
            </Typography>
            MX UI <Chip>version 1.0.0 🔥</Chip>
          </Typography>
          <Typography size="sm" className="mt-2">
            Build fast. Build beautifully. One component at a time.
          </Typography>
        </Box>

        {/* Links */}
        <Box className="space-y-2">
          <Typography
            size="md"
            weight="semibold"
            className="text-zinc-800 dark:text-white"
          >
            Quick Links
          </Typography>
          <Flex as="ul" direction="col" className="text-sm space-y-1">
            <Box as="li">
              <Typography
                as={Link}
                href="/showcase"
                type="link"
                className="hover:underline"
              >
                Components
              </Typography>
            </Box>
            <Box as="li">
              <Typography
                as={Link}
                href="#docs"
                type="link"
                className="hover:underline"
              >
                Documentation
              </Typography>
            </Box>
            <Box as="li">
              <Typography
                as={Link}
                href="#testimonials"
                type="link"
                className="hover:underline"
              >
                Testimonials
              </Typography>
            </Box>
            <Box as="li">
              <Typography
                as={Link}
                href="#contact"
                type="link"
                className="hover:underline"
              >
                Contact
              </Typography>
            </Box>
          </Flex>
        </Box>

        {/* Social */}
        <Box className="space-y-2">
          <Typography
            size="md"
            weight="semibold"
            className="text-zinc-800 dark:text-white"
          >
            Connect
          </Typography>
          <Flex gap="4">
            <Link
              to="https://github.com/bhawanibytes/rimxui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 hover:text-purple-500 transition" />
            </Link>
            <Link
              to="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-5 w-5 hover:text-purple-500 transition" />
            </Link>
            <Link
              to="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5 hover:text-purple-500 transition" />
            </Link>
          </Flex>
        </Box>
      </Flex>

      <Typography
        size="xs"
        className="text-center mt-10 text-zinc-500 dark:text-zinc-400"
      >
        © {new Date().getFullYear()} RiMX UI. All rights reserved.
      </Typography>
    </Flex>
  </Stack>
);

const RiMXLogo: React.FC = () => (
  <Typography
    as={Link}
    size="2xl"
    type="link"
    weight="semibold"
    href="/"
    className="flex item-center bg-gradient-to-b from-zinc-300 to-zinc-900 bg-clip-text text-transparent"
  >
    R
    <Typography size="2xl" weight="semibold" type="inline" color="red">
      i
    </Typography>
    MX UI
  </Typography>
);
