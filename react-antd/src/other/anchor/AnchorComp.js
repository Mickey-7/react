// snippet : rafce
import React from "react";
//import css
import "./anchor.css";
import { Anchor, BackTop } from "antd";

// snippet : cp
const { Link } = Anchor;

const AnchorComp = () => {
  return (
    <div>
      <Anchor
        style={{
          marginTop: "30px",
          marginLeft: "67vw",
          width: "110px",
          backgroundColor: "rgb(95, 94, 91)",
          position: "absolute",
        }}
      >
        {/* note that the href is added to the URL on web browser */}
        <Link href="#anchor1" title="Anchor 1"></Link>
        <Link href="#anchor2" title="Anchor 2"></Link>
        <Link href="#anchor" title="Anchor">
          <Link href="#anchor3" title="Anchor 3"></Link>
          <Link href="#anchor4" title="Anchor 4"></Link>
        </Link>
        <Link href="#anchor5" title="Anchor 5"></Link>
      </Anchor>

      <div
        style={{
          background: "black",
          padding: "24px 24px 0px",
          height: "300vh",
        }}
      >
        <h3 id="anchor1">Anchor 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          dolorem commodi incidunt voluptatem veniam nisi consequuntur! Natus?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          veritatis neque atque eum, quasi et tempora recusandae maxime
          laudantium ducimus iure? Ab reprehenderit distinctio eum assumenda
          quis nesciunt odit alias neque eligendi ducimus fugit rerum nemo quam
          consequuntur culpa nobis tempore officiis, commodi vitae voluptates
          illum? Ex dolores nulla inventore doloribus, enim veniam repellat
          numquam! Odit, perspiciatis!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          dolorem commodi incidunt voluptatem veniam nisi consequuntur! Natus?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          veritatis neque atque eum, quasi et tempora recusandae maxime
          laudantium ducimus iure? Ab reprehenderit distinctio eum assumenda
          quis nesciunt odit alias neque eligendi ducimus fugit rerum nemo quam
          consequuntur culpa nobis tempore officiis, commodi vitae voluptates
          illum? Ex dolores nulla inventore doloribus, enim veniam repellat
          numquam! Odit, perspiciatis!
        </p>

        <h3 id="anchor2">Anchor 2</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          veritatis neque atque eum, quasi et tempora recusandae maxime
          laudantium ducimus iure? Ab reprehenderit distinctio eum assumenda
          quis nesciunt odit alias neque eligendi ducimus fugit rerum nemo quam
          consequuntur culpa nobis tempore officiis, commodi vitae voluptates
          illum? Ex dolores nulla inventore doloribus, enim veniam repellat
          numquam! Odit, perspiciatis!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          dolorem commodi incidunt voluptatem veniam nisi consequuntur! Natus?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          veritatis neque atque eum, quasi et tempora recusandae maxime
          laudantium ducimus iure? Ab reprehenderit distinctio eum assumenda
          quis nesciunt odit alias neque eligendi ducimus fugit rerum nemo quam
          consequuntur culpa nobis tempore officiis, commodi vitae voluptates
          illum? Ex dolores nulla inventore doloribus, enim veniam repellat
          numquam! Odit, perspiciatis!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          veritatis neque atque eum, quasi et tempora recusandae maxime
          laudantium ducimus iure? Ab reprehenderit distinctio eum assumenda
          quis nesciunt odit alias neque eligendi ducimus fugit rerum nemo quam
          consequuntur culpa nobis tempore officiis, commodi vitae voluptates
          illum? Ex dolores nulla inventore doloribus, enim veniam repellat
          numquam! Odit, perspiciatis!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          dolorem commodi incidunt voluptatem veniam nisi consequuntur! Natus?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          veritatis neque atque eum, quasi et tempora recusandae maxime
          laudantium ducimus iure? Ab reprehenderit distinctio eum assumenda
          quis nesciunt odit alias neque eligendi ducimus fugit rerum nemo quam
          consequuntur culpa nobis tempore officiis, commodi vitae voluptates
          illum? Ex dolores nulla inventore doloribus, enim veniam repellat
          numquam! Odit, perspiciatis!
        </p>

        <h3 id="anchor3">Anchor 3</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          dolorem commodi incidunt voluptatem veniam nisi consequuntur! Natus?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          veritatis neque atque eum, quasi et tempora recusandae maxime
          laudantium ducimus iure? Ab reprehenderit distinctio eum assumenda
          quis nesciunt odit alias neque eligendi ducimus fugit rerum nemo quam
          consequuntur culpa nobis tempore officiis, commodi vitae voluptates
          illum? Ex dolores nulla inventore doloribus, enim veniam repellat
          numquam! Odit, perspiciatis!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          dolorem commodi incidunt voluptatem veniam nisi consequuntur! Natus?
        </p>

        <h3 id="anchor4">Anchor 4</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          dolorem commodi incidunt voluptatem veniam nisi consequuntur! Natus?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          veritatis neque atque eum, quasi et tempora recusandae maxime
          laudantium ducimus iure? Ab reprehenderit distinctio eum assumenda
          quis nesciunt odit alias neque eligendi ducimus fugit rerum nemo quam
          consequuntur culpa nobis tempore officiis, commodi vitae voluptates
          illum? Ex dolores nulla inventore doloribus, enim veniam repellat
          numquam! Odit, perspiciatis!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          dolorem commodi incidunt voluptatem veniam nisi consequuntur! Natus?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          dolorem commodi incidunt voluptatem veniam nisi consequuntur! Natus?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          dolorem commodi incidunt voluptatem veniam nisi consequuntur! Natus?
        </p>

        <h3 id="anchor5">Anchor 5</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          dolorem commodi incidunt voluptatem veniam nisi consequuntur! Natus?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          veritatis neque atque eum, quasi et tempora recusandae maxime
          laudantium ducimus iure? Ab reprehenderit distinctio eum assumenda
          quis nesciunt odit alias neque eligendi ducimus fugit rerum nemo quam
          consequuntur culpa nobis tempore officiis, commodi vitae voluptates
          illum? Ex dolores nulla inventore doloribus, enim veniam repellat
          numquam! Odit, perspiciatis!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          dolorem commodi incidunt voluptatem veniam nisi consequuntur! Natus?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          dolorem commodi incidunt voluptatem veniam nisi consequuntur! Natus?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          dolorem commodi incidunt voluptatem veniam nisi consequuntur! Natus?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          veritatis neque atque eum, quasi et tempora recusandae maxime
          laudantium ducimus iure? Ab reprehenderit distinctio eum assumenda
          quis nesciunt odit alias neque eligendi ducimus fugit rerum nemo quam
          consequuntur culpa nobis tempore officiis, commodi vitae voluptates
          illum? Ex dolores nulla inventore doloribus, enim veniam repellat
          numquam! Odit, perspiciatis!
        </p>
      </div>
    </div>
  );
};

export default AnchorComp;
