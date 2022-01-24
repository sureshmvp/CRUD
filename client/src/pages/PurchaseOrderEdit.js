// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

// Custom Actions


// START IMPORT ACTIONS
import PurchaseOrderActions from "../redux/actions/PurchaseOrderActions";
import WebOrderLevelActions from "../redux/actions/WebOrderLevelActions";
import LineDetailActions from "../redux/actions/LineDetailActions";

// END IMPORT ACTIONS

/** APIs

* actionsPurchaseOrder.create
*	@description CRUD ACTION create
*	@param PurchaseOrder obj - Object to insert
*
* actionsPurchaseOrder.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id PurchaseOrder
*	@returns PurchaseOrder
*
* actionsPurchaseOrder.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id PurchaseOrder
*	@returns PurchaseOrder
*
* actionsWebOrderLevel.list
*	@description CRUD ACTION list
*
* actionsLineDetail.list
*	@description CRUD ACTION list
*	@returns ARRAY OF LineDetail
*

**/

class PurchaseOrderEdit extends Component {
  // Init purchaseorder
  constructor(props) {
    super(props);
    this.state = {
      purchaseorder: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsPurchaseOrder.loadPurchaseOrder(this.props.match.params.id);
    }
    
    this.props.actionsLineDetail.loadLineDetailList();
    this.props.actionsWebOrderLevel.loadWebOrderLevelList();
  }

  // Insert props purchaseorder in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      purchaseorder: props.purchaseorder
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.purchaseorder._id) {
      this.props.actionsPurchaseOrder.savePurchaseOrder(this.state.purchaseorder).then(data => {
        this.props.history.push("/purchaseorders/");
      });
    } else {
      this.props.actionsPurchaseOrder.createPurchaseOrder(this.state.purchaseorder).then(data => {
        this.props.history.push("/purchaseorders/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>PurchaseOrder Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="Name"
            label="Name"
            value={this.state.purchaseorder.Name || ""}
            onChange={Utils.handleChange.bind(this, "purchaseorder")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="PoNumber"
            label="PoNumber"
            value={this.state.purchaseorder.PoNumber || ""}
            onChange={Utils.handleChange.bind(this, "purchaseorder")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation 1:m po_lineDetails with LineDetail */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="po_lineDetails">
              Po_lineDetails
            </InputLabel>
            <Select
              value={this.state.purchaseorder.po_lineDetails || ""}
              onChange={Utils.handleChangeSelect.bind(this, "purchaseorder")}
              inputProps={{
                id: "po_lineDetails",
                name: "po_lineDetails"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listLineDetail && this.props.listLineDetail.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Relation 1:m po_webOrderLevel with WebOrderLevel */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="po_webOrderLevel">
              Po_webOrderLevel
            </InputLabel>
            <Select
              value={this.state.purchaseorder.po_webOrderLevel || ""}
              onChange={Utils.handleChangeSelect.bind(this, "purchaseorder")}
              inputProps={{
                id: "po_webOrderLevel",
                name: "po_webOrderLevel"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listWebOrderLevel && this.props.listWebOrderLevel.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/purchaseorders/">Back to list</Link>

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
    actionsPurchaseOrder: bindActionCreators(PurchaseOrderActions, dispatch),
    actionsWebOrderLevel: bindActionCreators(WebOrderLevelActions, dispatch),
    actionsLineDetail: bindActionCreators(LineDetailActions, dispatch),
  };
};

// Validate types
PurchaseOrderEdit.propTypes = { 
  actionsPurchaseOrder: PropTypes.object.isRequired,
  actionsWebOrderLevel: PropTypes.object.isRequired,
  actionsLineDetail: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    purchaseorder: state.PurchaseOrderEditReducer.purchaseorder,
    listLineDetail: state.PurchaseOrderEditReducer.listLineDetail,
    listWebOrderLevel: state.PurchaseOrderEditReducer.listWebOrderLevel
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PurchaseOrderEdit);
