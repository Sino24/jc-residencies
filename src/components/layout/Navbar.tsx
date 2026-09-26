import { JSX, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { bookNowPath, mainNav } from "@/data/navigation";
import { property } from "@/data/property";
import { useScrolled } from "@/hooks/useScrolled";
import { cx } from "@/utils/cx";

import MobileMenu from "./MobileMenu";
import styles from "./Navbar.module.css";

import logo from "@/assets/Logo.png";

export default function Navbar(): JSX.Element {
  const scrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Only Home has a hero dark enough for the transparent-over-hero look.
  // Every other page has nothing behind the nav to sit on, so it renders
  // in the same solid/blurred state used for "scrolled" from the start.
  const solid = scrolled || !isHome;

  return (
    <>
      <header className={cx(styles.header, solid && styles.scrolled)}>
        <Container className={styles.inner}>
          {/* Logo */}
          <NavLink to="/" className={styles.logo} aria-label={`${property.name} home`}>
            <img src={logo} alt={property.name} className={styles.logoImage} />
            <span className={styles.brandName}>{property.name}</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className={styles.nav} aria-label="Primary">
            {mainNav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) => cx(styles.link, isActive && styles.active)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className={styles.actions}>
            <Button to={bookNowPath} variant="premium" size="sm" className={styles.book}>
              Book now
            </Button>

            <button
              type="button"
              className={styles.toggle}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <Menu size={26} strokeWidth={1.6} />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}