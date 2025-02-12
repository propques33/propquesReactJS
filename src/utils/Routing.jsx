import React, { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
const Home = React.lazy(() => import("../pages/Home.jsx"));
const Book = React.lazy(() => import("../pages/Book.jsx"));
const ContactPage = React.lazy(() => import("../pages/ContactPage.jsx"));
const Shop = React.lazy(() => import("../pages/Shop.jsx"));
const About = React.lazy(() => import("../pages/About.jsx"));
const BlogList = React.lazy(() => import("../components/BlogList.jsx"));
const BlogDetails = React.lazy(() => import("../components/BlogDetails.jsx"));
const AllBlogsList = React.lazy(() => import("../components/AllBlogsList.jsx"));

const UserViewBlogs = React.lazy(() =>
  import("../components/UserViewBlogs.jsx")
);
const Button = React.lazy(() => import("../components/Button.jsx"));
const SuccessPage = React.lazy(() => import("../components/SuccessPage.jsx"));
const SuccessPageMatch = React.lazy(() =>
  import("../components/SuccessPageMatch.jsx")
);
const SuccessPageStart = React.lazy(() =>
  import("../components/SuccessPageStart.jsx")
);
const PrivacyPolicy = React.lazy(() =>
  import("../components/PrivacyPolicy.jsx")
);
const TermsAndConditions = React.lazy(() =>
  import("../components/TermsAndConditions.jsx")
);
const Works = React.lazy(() => import("../components/Works.jsx"));
const StartYourOwnCoworking = React.lazy(() =>
  import("../components/StartYourOwnCoworking.jsx")
);
const MatchMaking = React.lazy(() => import("../components/MatchMaking.jsx"));
const Webinar = React.lazy(() => import("../components/Webinar.jsx"));
const Partners = React.lazy(() => import("../components/Partners.jsx"));
const OurService = React.lazy(() => import("../components/OurService.jsx"));
const Faq = React.lazy(() => import("../components/Faq.jsx"));
const WorkViaa = React.lazy(() => import("../components/WorkViaa.jsx"));
const WorkVistar = React.lazy(() => import("../components/WorkVistar.jsx"));
const Workjar = React.lazy(() => import("../components/Workjar.jsx"));
const Cubispace = React.lazy(() => import("../components/Cubispace.jsx"));
const SummitSpace = React.lazy(() => import("../components/SummitSpace.jsx"));
const Sapnasangeeta = React.lazy(() =>
  import("../components/Sapnasangeeta.jsx")
);
const WorqSpot = React.lazy(() => import("../components/WorqSpot.jsx"));
const Workdesq = React.lazy(() => import("../components/Workdesq.jsx"));
const Karyasthal = React.lazy(() => import("../components/Karyasthal.jsx"));
const NotFound = React.lazy(() => import("../components/NotFound"));
const Author = React.lazy(() => import("../components/Author.jsx"));

import AdminDashboard from "../components/AdminDashboard";
import AuthorDashboard from "../components/AuthorDashboard";
import LoginForm from "../components/LoginForm";
import SinglePostPage from "../components/SinglePostPage";
import Write from "../components/Write";
import PostListPage from "../components/PostListPage.jsx";
import AdminSignup from "../components/AdminSignup.jsx";
import AdminLogin from "../components/AdminLogin.jsx";
import EditBlog from "../components/EditBlog";
const BlogDetailPage = React.lazy(() =>
  import("../components/BlogDetails.jsx")
);
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/form" element={<Button />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/thankyou" element={<SuccessPage />} />
        <Route
          path="/matchmaking-for-coworking-operators-thankyou"
          element={<SuccessPageMatch />}
        />
        <Route
          path="/start-your-own-coworking-space-thankyou"
          element={<SuccessPageStart />}
        />

        <Route path="/blogs" element={<UserViewBlogs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/edit-blog/:slug" element={<EditBlog />} />

        {/* <Route
          path="/blog/:slug"
          element={<BlogDetailPage blogPosts={blogPosts} />}
        /> */}

        <Route path="/faqs" element={<Faq />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/works" element={<Works />} />
        <Route path="/webinar" element={<Webinar />} />
        <Route path="/partners-with-us" element={<Partners />} />
        <Route path="/author/userpropques" element={<Author />} />

        <Route path="/our-service" element={<OurService />} />
        <Route path="/workviaa" element={<WorkViaa />} />
        <Route
          path="/matchmaking-for-coworking-operators"
          element={<MatchMaking />}
        />
        <Route
          path="/start-your-own-coworking-space"
          element={<StartYourOwnCoworking />}
        />
        <Route path="/worqspot" element={<WorqSpot />} />
        <Route path="/cubispace" element={<Cubispace />} />
        <Route path="/work-vistar" element={<WorkVistar />} />
        <Route path="/workjar" element={<Workjar />} />
        <Route path="/workdesq" element={<Workdesq />} />
        <Route path="/karyasthal" element={<Karyasthal />} />
        <Route path="//sapna-sangeeta-offices" element={<Sapnasangeeta />} />
        <Route path="/summit-space" element={<SummitSpace />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/all-blogs-list" element={<AllBlogsList />} />

        {/* Blog */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<AdminSignup />} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/write" element={<Write />} />
        <Route path="/:slug" element={<SinglePostPage />} />

        <Route
          path="/author-dashboard"
          element={
            <ProtectedRoute allowedRoles={["author"]}>
              <AuthorDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default Routing;
