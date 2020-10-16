import React from "react";

// reactstrap components

// core components

function ProfilePageHeader() {
  //   document.documentElement.classList.remove("nav-open");
  //   React.useEffect(() => {
  //     document.body.classList.add("profile-page");
  //     return function cleanup() {
  //       document.body.classList.remove("profile-page");
  //     };
  //   });
  return (
    <>
      <div
        className="page-header page-header-small"
        style={{
          backgroundImage: `url(${"https://dl.airtable.com/.attachments/a6713ec0941889889ad726f0deb65b84/94d263d6/contact_page_image.jpg"})`,
        }}
      >
        <div className="filter" />
      </div>
    </>
  );
}

export default ProfilePageHeader;
