import { RouteObject } from "react-router-dom";
import { Dump, Home } from "@pages";
import NavbarPage from "@/components/showcase/NavbarPage";
import PaginationPage from "@/components/showcase/PaginationPage";
import ButtonPage from "@/components/showcase/ButtonPage";
import { CardPage } from "@/components/showcase/CardPage";
import { ModalPage } from "@/components/showcase/ModalPage";
import { ToastPage } from "@/components/showcase/ToastPage";
import { ColorShowcase } from "@/components/showcase/ColorShowcase";
import { ColorUsageShowcase } from "@/components/showcase/ColorUsageShowcase";
import ListPage from "@/components/showcase/ListPage";
import ShadowShowcase from "@/components/showcase/ShadowShowcase";
import { ShowcaseLayout } from "@/components/showcase/ShowcaseLayout";
import { TypographyPreview } from "@/components/showcase/TypographyPage";
import { CHILD_ROUTES, ROUTES } from "./routes";
import BreadcrumbsPage from "@/components/showcase/BreadcrumpPage";
import SidebarPage from "@/components/showcase/SidebarPage";
import SkeletonPage from "@/components/showcase/SkeletonPage";
import ChipsPage from "@/components/showcase/ChipsPage";
import AccordionPage from "@/components/showcase/AccordionPage";
import CounterPage from "@/components/showcase/CounterPage";
import DarkMode from "@/components/showcase/DarkMode";
import NotificationPage from "@/components/showcase/NotificationPage";
import LabelPage from "@/components/showcase/LabelPage";
import InputPage from "@/components/showcase/InputPage";
import TextAreaPage from "@/components/showcase/TextAreaPage";
import TogglePage from "@/components/showcase/TogglePage";
import RadioButtonPage from "@/components/showcase/RadioButtonPage";
import CheckboxPage from "@/components/showcase/CheckboxPage";
import SelectPage from "@/components/showcase/SelectPage";
import MorphedButton from "@/components/showcase/MorphedButton";
import OTPPage from "@/components/showcase/OtpPage";
import CliTabPage from "@/components/showcase/CliTabPage";


export const ROUTE_COMPONENTS: Array<RouteObject> = [
  {
    path: ROUTES.home,
    element: <Home />,
  },
  {
    path: ROUTES.dump,
    element: <Dump />,
  },
  {
    path: ROUTES.docs,
    element: <ShowcaseLayout />,
    children: [
      {
        index: true,
        element: <ColorShowcase />,
      },
      {
        path: CHILD_ROUTES.docs.navbarpage,
        element: <NavbarPage />,
      },
      {
        path: CHILD_ROUTES.docs.sidebarpage,
        element: <SidebarPage />,
      },
      {
        path: CHILD_ROUTES.docs.paginationpage,
        element: <PaginationPage />,
      },
      {
        path: CHILD_ROUTES.docs.colors,
        element: <ColorShowcase />,
      },
      {
        path: CHILD_ROUTES.docs.colorUsage,
        element: <ColorUsageShowcase />,
      },
      {
        path: CHILD_ROUTES.docs.typography,
        element: <TypographyPreview />,
      },
      {
        path: CHILD_ROUTES.docs.buttons,
        element: <ButtonPage />,
      },
      {
        path: CHILD_ROUTES.docs.cards,
        element: <CardPage />,
      },
      {
        path: CHILD_ROUTES.docs.lists,
        element: <ListPage />,
      },

      {
        path: CHILD_ROUTES.docs.shadows,
        element: <ShadowShowcase />,
      },
      {
        path: CHILD_ROUTES.docs.modals,
        element: <ModalPage />,
      },
      {
        path: CHILD_ROUTES.docs.toasts,
        element: <ToastPage />,
      },
      {
        path: CHILD_ROUTES.docs.breadcrumpspage,
        element: <BreadcrumbsPage />,
      },
      {
        path: CHILD_ROUTES.docs.skeleton,
        element: <SkeletonPage />,
      },
      {
        path: CHILD_ROUTES.docs.chips,
        element: <ChipsPage />,
      },
      {
        path: CHILD_ROUTES.docs.accordion,
        element: <AccordionPage />,
      },
      {
        path: CHILD_ROUTES.docs.counter,
        element: <CounterPage />,
      },
      {
        path: CHILD_ROUTES.docs.darkMode,
        element: <DarkMode />,
      },
      {
        path: CHILD_ROUTES.docs.notification,
        element: <NotificationPage />,
      },
      {
        path: CHILD_ROUTES.docs.label,
        element: <LabelPage />,
      },
      {
        path: CHILD_ROUTES.docs.input,
        element: <InputPage />,
      },
      {
        path: CHILD_ROUTES.docs.textarea,
        element: <TextAreaPage />,
      },
      {
        path: CHILD_ROUTES.docs.toggle,
        element: <TogglePage />,
      },
      {
        path: CHILD_ROUTES.docs.radioButton,
        element: <RadioButtonPage />,
      },
      {
        path: CHILD_ROUTES.docs.checkbox,
        element: <CheckboxPage />,
      },
      {
        path: CHILD_ROUTES.docs.select,
        element: <SelectPage />,
      },
      {
        path: CHILD_ROUTES.docs.morphed,
        element: <MorphedButton />,
      },
      {
        path: CHILD_ROUTES.docs.otp,
        element: <OTPPage />,
      },
      {
        path: CHILD_ROUTES.docs.cli,
        element: <CliTabPage />,
      },
    ],
  },
];
