import type { Meta } from "@storybook/react";
import { Toaster, toast } from "@/components/ui/toaster";
import { useEffect } from "react";

const meta = {
  title: "Toast/Toaster",
  component: Toaster,
} satisfies Meta<typeof Toaster>;

export default meta;

export const Loading = () => {
  useEffect(() => {
    toast.loading("Loading toast title", {
      description: "description in loading title",
    });
  }, []);

  return <Toaster />;
};

export const Success = () => {
  useEffect(() => {
    toast.success("Success toast title", {
      description: "description in Success title",
    });
  }, []);

  return <Toaster />;
};


export const Info = () => {
  useEffect(() => {
    toast.info("Info toast title", {
      description: "description in Info title",
    });
  }, []);

  return <Toaster />;
};



export const Danger = () => {
  useEffect(() => {
    toast.error("Danger toast title", {
      description: "description in Danger title",
    });
  }, []);

  return <Toaster />;
};


export const Warning = () => {
  useEffect(() => {
    toast.warning("Warning toast title", {
      description: "description in Warning title",
    });
  }, []);

  return <Toaster />;
};