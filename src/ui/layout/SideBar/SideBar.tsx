import React from "react";
import "./SideBar.css";
export default function () {
  return (
    <div className="sidebar-container">
      <div
        className="aside-logo d-none d-lg-flex flex-column align-items-center flex-column-auto py-8"
        id="kt_aside_logo"
      >
        <a href="/metronic8/react/demo4/dashboard">
          <img
            src="/metronic8/react/demo4/media/logos/logo-demo4.svg"
            alt="logo"
          />
        </a>
      </div>
      <div
        className="asaside-nav d-flex flex-column align-lg-center flex-column-fluid w-100 pt-5 pt-lg-0"
        id="kt_aside_nav"
      >
        <div
          id="kt_aside_menu"
          className="menu menu-column menu-title-gray-600 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6"
          data-kt-menu="true"
        >
          <div className="menu-item here show py-3">
            <a
              className="menu-link menu-center active"
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              data-bs-dismiss="click"
              data-bs-placement="right"
              data-bs-original-title="Dashboard"
              href="/metronic8/react/demo4/dashboard"
            >
              <span className="menu-icon me-0">
                <i className="bi bi-bar-chart-line fs-2"></i>
              </span>
            </a>
          </div>
          <div className="menu-item py-3">
            <a
              className="menu-link menu-center"
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              data-bs-dismiss="click"
              data-bs-placement="right"
              data-bs-original-title="Layout Builder"
              href="/metronic8/react/demo4/builder"
            >
              <span className="menu-icon me-0">
                <i className="bi bi-gear fs-2"></i>
              </span>
            </a>
          </div>
          <div
            className="menu-item py-3"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="right-start"
          >
            <span className="menu-link menu-center">
              <span className="menu-icon me-0">
                <i className="bi bi-file-text fs-2"></i>
              </span>
            </span>
            <div className="menu-sub menu-sub-dropdown w-225px w-lg-275px px-1 py-4">
              <div
                className="menu-item menu-accordion"
                data-kt-menu-sub="accordion"
                data-kt-menu-trigger="click"
              >
                <span className="menu-link">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot"></span>
                  </span>
                  <span className="menu-title">Profile</span>
                  <span className="menu-arrow"></span>
                </span>
                <div className="menu-sub menu-sub-accordion">
                  <div className="menu-item">
                    <a
                      className="menu-link menu-center"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-dismiss="click"
                      data-bs-placement="right"
                      data-bs-original-title="Overview"
                      href="/metronic8/react/demo4/crafted/pages/profile/overview"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot"></span>
                      </span>
                      <span className="menu-title">Overview</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link menu-center"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-dismiss="click"
                      data-bs-placement="right"
                      data-bs-original-title="Projects"
                      href="/metronic8/react/demo4/crafted/pages/profile/projects"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot"></span>
                      </span>
                      <span className="menu-title">Projects</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link menu-center"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-dismiss="click"
                      data-bs-placement="right"
                      data-bs-original-title="Campaigns"
                      href="/metronic8/react/demo4/crafted/pages/profile/campaigns"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot"></span>
                      </span>
                      <span className="menu-title">Campaigns</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link menu-center"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-dismiss="click"
                      data-bs-placement="right"
                      data-bs-original-title="Documents"
                      href="/metronic8/react/demo4/crafted/pages/profile/documents"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot"></span>
                      </span>
                      <span className="menu-title">Documents</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link menu-center"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-dismiss="click"
                      data-bs-placement="right"
                      data-bs-original-title="Connections"
                      href="/metronic8/react/demo4/crafted/pages/profile/connections"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot"></span>
                      </span>
                      <span className="menu-title">Connections</span>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="menu-item menu-accordion"
                data-kt-menu-sub="accordion"
                data-kt-menu-trigger="click"
              >
                <span className="menu-link">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot"></span>
                  </span>
                  <span className="menu-title">Wizards</span>
                  <span className="menu-arrow"></span>
                </span>
                <div className="menu-sub menu-sub-accordion">
                  <div className="menu-item">
                    <a
                      className="menu-link menu-center"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-dismiss="click"
                      data-bs-placement="right"
                      data-bs-original-title="Horizontal"
                      href="/metronic8/react/demo4/crafted/pages/wizards/horizontal"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot"></span>
                      </span>
                      <span className="menu-title">Horizontal</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link menu-center"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-dismiss="click"
                      data-bs-placement="right"
                      data-bs-original-title="Vertical"
                      href="/metronic8/react/demo4/crafted/pages/wizards/vertical"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot"></span>
                      </span>
                      <span className="menu-title">Vertical</span>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="menu-item menu-accordion"
                data-kt-menu-sub="accordion"
                data-kt-menu-trigger="click"
              >
                <span className="menu-link">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot"></span>
                  </span>
                  <span className="menu-title">Accounts</span>
                  <span className="menu-arrow"></span>
                </span>
                <div className="menu-sub menu-sub-accordion">
                  <div className="menu-item">
                    <a
                      className="menu-link menu-center"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-dismiss="click"
                      data-bs-placement="right"
                      data-bs-original-title="Overview"
                      href="/metronic8/react/demo4/crafted/account/overview"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot"></span>
                      </span>
                      <span className="menu-title">Overview</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link menu-center"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-dismiss="click"
                      data-bs-placement="right"
                      data-bs-original-title="Settings"
                      href="/metronic8/react/demo4/crafted/account/settings"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot"></span>
                      </span>
                      <span className="menu-title">Settings</span>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="menu-item menu-accordion"
                data-kt-menu-sub="accordion"
                data-kt-menu-trigger="click"
              >
                <span className="menu-link">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot"></span>
                  </span>
                  <span className="menu-title">Widgets</span>
                  <span className="menu-arrow"></span>
                </span>
                <div className="menu-sub menu-sub-accordion">
                  <div className="menu-item">
                    <a
                      className="menu-link menu-center"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-dismiss="click"
                      data-bs-placement="right"
                      data-bs-original-title="Lists"
                      href="/metronic8/react/demo4/crafted/widgets/lists"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot"></span>
                      </span>
                      <span className="menu-title">Lists</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link menu-center"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-dismiss="click"
                      data-bs-placement="right"
                      data-bs-original-title="Statistics"
                      href="/metronic8/react/demo4/crafted/widgets/statistics"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot"></span>
                      </span>
                      <span className="menu-title">Statistics</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link menu-center"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-dismiss="click"
                      data-bs-placement="right"
                      data-bs-original-title="Charts"
                      href="/metronic8/react/demo4/crafted/widgets/charts"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot"></span>
                      </span>
                      <span className="menu-title">Charts</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link menu-center"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-dismiss="click"
                      data-bs-placement="right"
                      data-bs-original-title="Mixed"
                      href="/metronic8/react/demo4/crafted/widgets/mixed"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot"></span>
                      </span>
                      <span className="menu-title">Mixed</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link menu-center"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-dismiss="click"
                      data-bs-placement="right"
                      data-bs-original-title="Tables"
                      href="/metronic8/react/demo4/crafted/widgets/tables"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot"></span>
                      </span>
                      <span className="menu-title">Tables</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link menu-center"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-dismiss="click"
                      data-bs-placement="right"
                      data-bs-original-title="Feeds"
                      href="/metronic8/react/demo4/crafted/widgets/feeds"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot"></span>
                      </span>
                      <span className="menu-title">Feeds</span>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="menu-item menu-accordion"
                data-kt-menu-sub="accordion"
                data-kt-menu-trigger="click"
              >
                <span className="menu-link">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot"></span>
                  </span>
                  <span className="menu-title">Chat</span>
                  <span className="menu-arrow"></span>
                </span>
                <div className="menu-sub menu-sub-accordion">
                  <div className="menu-item">
                    <a
                      className="menu-link menu-center"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-dismiss="click"
                      data-bs-placement="right"
                      data-bs-original-title="Private Chat"
                      href="/metronic8/react/demo4/apps/chat/private-chat"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot"></span>
                      </span>
                      <span className="menu-title">Private Chat</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link menu-center"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-dismiss="click"
                      data-bs-placement="right"
                      data-bs-original-title="Group Chart"
                      href="/metronic8/react/demo4/apps/chat/group-chat"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot"></span>
                      </span>
                      <span className="menu-title">Group Chart</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link menu-center"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-dismiss="click"
                      data-bs-placement="right"
                      data-bs-original-title="Drawer Chart"
                      href="/metronic8/react/demo4/apps/chat/drawer-chat"
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot"></span>
                      </span>
                      <span className="menu-title">Drawer Chart</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="menu-item py-3"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="right-start"
          >
            <span className="menu-link menu-center">
              <span className="menu-icon me-0">
                <i className="bi bi-sticky fs-2"></i>
              </span>
            </span>
            <div className="menu-sub menu-sub-dropdown w-225px w-lg-275px px-1 py-4">
              <div className="menu-item">
                <a
                  className="menu-link menu-center"
                  data-bs-toggle="tooltip"
                  data-bs-trigger="hover"
                  data-bs-dismiss="click"
                  data-bs-placement="right"
                  href="/metronic8/react/demo4/error/404"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot"></span>
                  </span>
                  <span className="menu-title">Error 404</span>
                </a>
              </div>
              <div className="menu-item">
                <a
                  className="menu-link menu-center"
                  data-bs-toggle="tooltip"
                  data-bs-trigger="hover"
                  data-bs-dismiss="click"
                  data-bs-placement="right"
                  href="/metronic8/react/demo4/error/500"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot"></span>
                  </span>
                  <span className="menu-title">Error 500</span>
                </a>
              </div>
            </div>
          </div>
          <div className="menu-item py-3">
            <a
              className="menu-link menu-center"
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              data-bs-dismiss="click"
              data-bs-placement="right"
              data-bs-original-title="User management"
              href="/metronic8/react/demo4/apps/user-management/users"
            >
              <span className="menu-icon me-0">
                <i className="bi bi-people fs-2"></i>
              </span>
            </a>
          </div>
          <div className="menu-item py-3">
            <a
              href="https://preview.keenthemes.com/metronic8/react/docs/docs/changelog"
              target="_blank"
              className="menu-link menu-center"
            >
              <span className="menu-icon me-0">
                <i className="bi bi-card-text fs-2"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div
        className="aside-footer d-flex flex-column align-items-center flex-column-auto"
        id="kt_aside_footer"
      >
        <div className="mb-7">
          <button
            type="button"
            className="btn btm-sm btn-icon btn-color-white btn-active-color-primary btn-active-light"
            data-kt-menu-trigger="click"
            data-kt-menu-overflow="true"
            data-kt-menu-placement="top-start"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-dismiss="click"
            title="Quick actions"
          >
            <span className="svg-icon svg-icon-2 svg-icon-lg-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mh-50px"
              >
                <path
                  d="M3 2H10C10.6 2 11 2.4 11 3V10C11 10.6 10.6 11 10 11H3C2.4 11 2 10.6 2 10V3C2 2.4 2.4 2 3 2Z"
                  fill="currentColor"
                ></path>
                <path
                  opacity="0.3"
                  d="M14 2H21C21.6 2 22 2.4 22 3V10C22 10.6 21.6 11 21 11H14C13.4 11 13 10.6 13 10V3C13 2.4 13.4 2 14 2Z"
                  fill="currentColor"
                ></path>
                <path
                  opacity="0.3"
                  d="M3 13H10C10.6 13 11 13.4 11 14V21C11 21.6 10.6 22 10 22H3C2.4 22 2 21.6 2 21V14C2 13.4 2.4 13 3 13Z"
                  fill="currentColor"
                ></path>
                <path
                  opacity="0.3"
                  d="M14 13H21C21.6 13 22 13.4 22 14V21C22 21.6 21.6 22 21 22H14C13.4 22 13 21.6 13 21V14C13 13.4 13.4 13 14 13Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </button>
          <div
            className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-200px"
            data-kt-menu="true"
          >
            <div className="menu-item px-3">
              <div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">
                Quick Actions
              </div>
            </div>
            <div className="separator mb-3 opacity-75"></div>
            <div className="menu-item px-3">
              <a href="#" className="menu-link px-3">
                New Ticket
              </a>
            </div>
            <div className="menu-item px-3">
              <a href="#" className="menu-link px-3">
                New Customer
              </a>
            </div>
            <div
              className="menu-item px-3"
              data-kt-menu-trigger="hover"
              data-kt-menu-placement="right-start"
              data-kt-menu-flip="left-start, top"
            >
              <a href="#" className="menu-link px-3">
                <span className="menu-title">New Group</span>
                <span className="menu-arrow"></span>
              </a>
              <div className="menu-sub menu-sub-dropdown w-175px py-4">
                <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3">
                    Admin Group
                  </a>
                </div>
                <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3">
                    Staff Group
                  </a>
                </div>
                <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3">
                    Member Group
                  </a>
                </div>
              </div>
            </div>
            <div className="menu-item px-3">
              <a href="#" className="menu-link px-3">
                New Contact
              </a>
            </div>
            <div className="separator mt-3 opacity-75"></div>
            <div className="menu-item px-3">
              <div className="menu-content px-3 py-3">
                <a className="btn btn-primary  btn-sm px-4" href="#">
                  Generate Reports
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
