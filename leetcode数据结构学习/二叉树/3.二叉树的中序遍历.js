/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let result = [];
    perNode(root);

    function perNode(root) {
        if (root == null) {
            return;
        }
        perNode(root.left)
        result.push(root.val)
        perNode(root.right)

    }

    return result;
};