
export const Header = (props) => {

  return `<header>
    <h1 class="site-title">${props.title}</h1>
      <nav>
        <a href="#">${props.links[0]}</a>
        <a href="#">${props.links[1]}</a>
        <a href="#">${props.links[2]}</a>
        <a href="#">${props.links[3]}</a>
        <a href="#">${props.links[4]}</a>
      </nav>
    </header>`
}