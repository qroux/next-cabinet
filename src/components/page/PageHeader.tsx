import {
  Breadcrumbs,
  Divider,
  Typography,
  Link as MuiLink,
} from "@material-ui/core";
import Link from "next/link";
import React from "react";

interface Crumb {
  label: string;
  path: string;
}

const PageHeader = ({ title, crumbs }: { title: string; crumbs: Crumb[] }) => {
  const renderCrumbs = () => {
    return crumbs.map((crumb, id) => {
      return (
        <Link href={crumb.path} passHref key={id}>
          <MuiLink
            color={id == crumbs.length - 1 ? "secondary" : "textPrimary"}
          >
            {crumb.label}
          </MuiLink>
        </Link>
      );
    });
  };

  return (
    <>
      <Breadcrumbs style={{ marginTop: "1.5rem" }}>
        {renderCrumbs()}
      </Breadcrumbs>
      <Typography variant="h5" style={{ marginTop: "1rem" }}>
        {title}
      </Typography>
      <Divider style={{ marginBottom: "2rem" }} />
    </>
  );
};
export default PageHeader;
