// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";

// Custom Actions


// START IMPORT ACTIONS
import WebOrderLevelActions from "../redux/actions/WebOrderLevelActions";
import PurchaseOrderActions from "../redux/actions/PurchaseOrderActions";

// END IMPORT ACTIONS

/** APIs

* actionsWebOrderLevel.create
*	@description CRUD ACTION create
*
* actionsWebOrderLevel.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsWebOrderLevel.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsPurchaseOrder.findBypo_webOrderLevel
*	@description CRUD ACTION findBypo_webOrderLevel
*	@param Objectid key - Id of model to search for
*

**/

class WebOrderLevelEdit extends Component {
  // Init weborderlevel
  constructor(props) {
    super(props);
    this.state = {
      weborderlevel: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsWebOrderLevel.loadWebOrderLevel(this.props.match.params.id);
      this.props.actionsPurchaseOrder.findBypo_webOrderLevel(this.props.match.params.id);
    }
    
  }

  // Insert props weborderlevel in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      weborderlevel: props.weborderlevel
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.weborderlevel._id) {
      this.props.actionsWebOrderLevel.saveWebOrderLevel(this.state.weborderlevel).then(data => {
        this.props.history.push("/weborderlevels/");
      });
    } else {
      this.props.actionsWebOrderLevel.createWebOrderLevel(this.state.weborderlevel).then(data => {
        this.props.history.push("/weborderlevels/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>WebOrderLevel Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          {/* RELATIONS */}

          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with PurchaseOrder */}
          
          <h3>PurchaseOrder</h3>
          {(!this.props.listPurchaseOrder || this.props.listPurchaseOrder.length === 0) && 
            <div>No PurchaseOrder associated</div>
          }
          {this.props.listPurchaseOrder &&
            this.props.listPurchaseOrder.map((item, i) => {
              return (
                <Link to={"/purchaseorders/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/weborderlevels/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsWebOrderLevel: bindActionCreators(WebOrderLevelActions, dispatch),
    actionsPurchaseOrder: bindActionCreators(PurchaseOrderActions, dispatch),
  };
};

// Validate types
WebOrderLevelEdit.propTypes = { 
  actionsWebOrderLevel: PropTypes.object.isRequired,
  actionsPurchaseOrder: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    weborderlevel: state.WebOrderLevelEditReducer.weborderlevel,
    listPurchaseOrder: state.WebOrderLevelEditReducer.listPurchaseOrder
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WebOrderLevelEdit);
