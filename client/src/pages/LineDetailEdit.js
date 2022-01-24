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
import LineDetailActions from "../redux/actions/LineDetailActions";
import PurchaseOrderActions from "../redux/actions/PurchaseOrderActions";

// END IMPORT ACTIONS

/** APIs

* actionsLineDetail.create
*	@description CRUD ACTION create
*	@param LineDetail obj - Object to insert
*
* actionsLineDetail.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id LineDetail
*	@returns LineDetail
*
* actionsLineDetail.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id LineDetail
*	@returns LineDetail
*
* actionsPurchaseOrder.findBypo_lineDetails
*	@description CRUD ACTION findBypo_lineDetails
*	@param Objectid key - Id of model to search for
*

**/

class LineDetailEdit extends Component {
  // Init linedetail
  constructor(props) {
    super(props);
    this.state = {
      linedetail: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsLineDetail.loadLineDetail(this.props.match.params.id);
      this.props.actionsPurchaseOrder.findBypo_lineDetails(this.props.match.params.id);
    }
    
  }

  // Insert props linedetail in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      linedetail: props.linedetail
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.linedetail._id) {
      this.props.actionsLineDetail.saveLineDetail(this.state.linedetail).then(data => {
        this.props.history.push("/linedetails/");
      });
    } else {
      this.props.actionsLineDetail.createLineDetail(this.state.linedetail).then(data => {
        this.props.history.push("/linedetails/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>LineDetail Edit</h1>
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
            <Link to="/linedetails/">Back to list</Link>

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
    actionsLineDetail: bindActionCreators(LineDetailActions, dispatch),
    actionsPurchaseOrder: bindActionCreators(PurchaseOrderActions, dispatch),
  };
};

// Validate types
LineDetailEdit.propTypes = { 
  actionsLineDetail: PropTypes.object.isRequired,
  actionsPurchaseOrder: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    linedetail: state.LineDetailEditReducer.linedetail,
    listPurchaseOrder: state.LineDetailEditReducer.listPurchaseOrder
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LineDetailEdit);
