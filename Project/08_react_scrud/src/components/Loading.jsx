import "../css/loading.css"

const Loading = () => {

    return(
        <div className="loading">
          <div className="loading-img">
            <div class="lds-roller">
              <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>
          </div>
          <div className="loading-msg">
            En cours de de chargement
          </div>
        </div>
    );
};

export default Loading;