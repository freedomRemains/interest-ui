import React from 'react'

const Top = () => {
  return (
    <>
      <div>
        <h1>Top Page</h1>
        <p>トップページ</p>
      </div>
      <div className="container mt-4">
        <h1 className="text-primary">Bootstrap in React</h1>
        <button className="btn btn-success">クリック</button>

        <div className="card mt-4">
          <div className="card-body">
            <h5 className="card-title">カードタイトル</h5>
            <p className="card-text">これはBootstrapのカードコンポーネントです。</p>
            <a href="#" className="btn btn-primary">詳細を見る</a>
          </div>
        </div>
      </div>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Brand</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <h1>Welcome to the Responsive Page</h1>
      <p>This is a sample page using Bootstrap.</p>
    </div>

    </>
  );
}

export default Top;
