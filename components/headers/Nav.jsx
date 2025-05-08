"use client";
import { blogMenu, homes, otherPages, propertyLinks } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Nav() {
  const pathname = usePathname();
  const isParentActive = (menus) =>
    menus.some((menu) =>
      menu.submenu
        ? menu.submenu.some((item) =>
            item.submenu
              ? item.submenu.some(
                  (item) => item.href.split("/")[1] === pathname.split("/")[1]
                )
              : item.href.split("/")[1] === pathname.split("/")[1]
          )
        : menu.href.split("/")[1] === pathname.split("/")[1]
    );
  return (
    <>
      <li
        className={`has-child ${
          homes.some((elm) => elm.href == pathname) ? "current-menu" : ""
        }`}
      >
        <a href="#">Home</a>
        <ul className="submenu">
          {homes.map((item, index) => (
            <li
              key={index}
              className={pathname == item.href ? "current-item" : ""}
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </li>
      <li
        className={`has-child style-2 ${
          isParentActive(propertyLinks) ? "current-menu" : ""
        } `}
      >
        <a href="#">Listing</a>
        <ul className="submenu">
          {propertyLinks.map((menu, index) => (
            <li key={index}>
              <a href="#">{menu.title}</a>
              <ul className="submenu2">
                {menu.submenu.map((item, subIndex) => (
                  <li
                    key={subIndex}
                    className={
                      pathname.split("/")[1] == item.href.split("/")[1]
                        ? "current-item"
                        : ""
                    }
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li>
      <li
        className={`has-child  ${
          isParentActive(otherPages) ? "current-menu" : ""
        } `}
      >
        <a href="#">Pages</a>
        <ul className="submenu">
          {otherPages.map((menu, index) => (
            <li
              key={index}
              className={`${menu.className || ""}  ${
                isParentActive(menu.submenu || []) ? "current-item" : ""
              }   ${
                menu.href?.split("/")[1] == pathname.split("/")[1]
                  ? "current-item"
                  : ""
              } `}
            >
              {menu.submenu ? (
                <>
                  <a href="#">{menu.title}</a>
                  <ul className="submenu">
                    {menu.submenu.map((item, subIndex) => (
                      <li
                        key={subIndex}
                        className={
                          item.href?.split("/")[1] == pathname.split("/")[1]
                            ? "current-item"
                            : ""
                        }
                      >
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link href={menu.href}>{menu.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </li>
      <li
        className={`has-child ${
          isParentActive(blogMenu) ? "current-menu" : ""
        } `}
      >
        <a href="#">Blog</a>
        <ul className="submenu">
          {blogMenu.map((item, index) => (
            <li
              key={index}
              className={
                item.href.split("/")[1] == pathname.split("/")[1]
                  ? "current-item"
                  : ""
              }
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </li>
      <li className={"/contact" == pathname ? "current-menu" : ""}>
        <Link href={`/contact`}>Contact</Link>
      </li>
    </>
  );
}
