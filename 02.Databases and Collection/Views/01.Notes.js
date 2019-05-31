/**
 * Behaviour of views are as follows:
 *  + Ready-Only:
 *      ~ Views are ready-only, write operations on views will error
 *  + Index Use & Sort Operations:
 *      ~ Views use the index of underlying collection
 *      ~ As the indexes are in underlying collection, you cann't create, drop or rebuild indexes on 
 *        views directly nor get a list of indexes on the view.
 *      ~ You cann't specify a $natural(default) sort on a view.
 * + Projection Restriction:
 *      ~ find() operations on views don't support the following projection opertaion:
 *          + $
 *          + $elemMatch
 *          + $slice
 *          + $meta
 * + Immutable Name:
 *      ~ Views can't be renamed
 * + View Creation:
 *      ~ Views are computed in demand during read operation, and MongoDB executes read operations
 *        on views as part of the underlying aggregation pipeline.
 *      ~ If the aggregation pipeline used to create the view suppresses the _id field, document in
 *        the view don't have the _id field
 * + Shraded View:
 *      ~ Views are considered shraded if their underlying collection is shraded. As such, you cann't
 *        specify a shraded view for the `from` field in $lookup & $graphLookup operations.
 * + Views and Collation:
 *      ~ You can specify a default collation for a view at creation time. If no collation is specified, 
 *        the view’s default collation is the “simple” binary comparison collator. That is, the view does 
 *        not inherit the collection’s default collation.
 *      ~ String comparisons on the view use the view’s default collation. An operation that attempts to 
 *        change or override a view’s default collation will fail with an error.
 *      ~ If creating a view from another view, you cannot specify a collation that differs from the
 *         source view’s collation.
 *      ~ If performing an aggregation that involves multiple views, such as with $lookup or $graphLookup, 
 *        the views must have the same collation.
 * + Public View Definition:
 *      ~ Operations that list collections, such as db.getCollectionInfos() and db.getCollectionNames(),
 *        include views in their output.
 *      ** Important **
 *      The view definition is public; i.e. db.getCollectionInfos() and explain operations on the view 
 *      will include the pipeline that defines the view. As such, avoid referring directly to sensitive 
 *      fields and values in view definitions.
 */