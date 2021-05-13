import React from 'react'

export const QuoteModal = () => {
    return (
        <div id="quoteModal" class="modal fade" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header bg-info text-white">
                        <h3 class="modal-title">Obtain a Shipping Quote</h3>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <form>
                                <div class="row form-group">
                                    <label for="numItems" class="col-sm-6 col-form-label">Number of Items Shipped</label>
                                    <div class="col">
                                        <select name="numItems" id="numItems" class="form-control">
                                            <option value="select">Select</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <label for="date" class="col-sm-6 col-form-label">Shipping Date</label>
                                    <div class="col">
                                        <input type="date" name="date" id="date" class="form-control" />
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <label class="col-sm-6 col-form-label">Shipping Type</label>
                                    <div class="col-2 btn-group btn-group-toggle" data-toggle="buttons">
                                        <label class="btn btn-success-active">
                                            <input type="radio" name="shippingType" id="shippingAir" autocomplete="off" value="air" checked>Air
                                        </label>
                                        <label class="btn btn-primary">
                                            <input type="radio" name="shippingType" id="shippingSea" autocomplete="off" value="sea">Sea
                                        </label>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col">
                                        <button class="btn btn-secondary" type="cancel" data-dismiss="modal">Cancel</button>
                                        <button class="btn btn-primary" type="submit">Get Quote</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuoteModal;
