import { useEffect } from "react";

const SalesmateChatWidget = () => {
  useEffect(() => {
    window.salesmateSettings = {
      workspace_id: "8785ae2b-d1da-4b0c-82e8-af44f25f2e52",
      app_key: "3ddadaf0-e89c-11ef-94ba-03d824b724d1",
      tenant_id: "propquesservices.salesmate.io",
    };

    const script = document.createElement("script");
    script.src =
      "https://propquesservices.salesmate.io/messenger-platform/messenger-platform-main.js";
    script.async = true;
    script.id = "salesmate-widget";

    script.onload = () => {
      if (window.loadwidget) {
        window.loadwidget("init", {});
        window.loadwidget("load_widget", "Widget Loading...!");
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default SalesmateChatWidget;
