import Link from 'next/link'
import Navigation from '../../config/navigation'

function SideBar(){
    return (
      <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">

          {Object.keys(Navigation.menuLink).map(k => {
            console.log(k);
              return (<Link href={Navigation.menuLink[k].link} key={k}>
                <li class="nav-item">
                  <a class="nav-link active" aria-currentF="page" href="#">
                    <span data-feather="home"></span>
                    {Navigation.menuLink[k].title}
                  </a>
                </li>
              </Link>)
          })}
        </ul>

        {/* <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Saved reports</span>
          <a class="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text"></span>
              Current month
            </a>
          </li>
        </ul> */}
      </div>
    </nav>
    )
}

export default SideBar;