import { createHash, createHmac } from 'node:crypto';
/**
 * Build the signing string per Hyperapify HMAC spec:
 * keyId + "\n" + METHOD + " " + requestPath + "\n" + "date: " + gmtTime + "\n"
 */
function buildSigningString(keyId, method, requestPath, gmtTime) {
    return `${keyId}\n${method} ${requestPath}\ndate: ${gmtTime}\n`;
}
/**
 * Compute HMAC-SHA256 signature and return base64-encoded result.
 */
function computeSignature(secretKey, signingString) {
    return createHmac('sha256', Buffer.from(secretKey, 'utf-8'))
        .update(signingString, 'utf-8')
        .digest('base64');
}
/**
 * Build the Authorization header value per Hyperapify HMAC spec.
 */
function buildAuthorizationHeader(keyId, signature) {
    return `Signature keyId="${keyId}",algorithm="hmac-sha256",headers="@request-target date",signature="${signature}"`;
}
/**
 * Compute SHA-256 digest of a request body for the Digest header.
 * Required only when a request body is present.
 */
function computeBodyDigest(body) {
    const hash = createHash('sha256').update(body, 'utf-8').digest('base64');
    return `SHA-256=${hash}`;
}
/**
 * Generate all HMAC authentication headers for a request.
 *
 * @param config - keyId and secretKey credentials
 * @param method - HTTP method (GET, POST, etc.)
 * @param requestPath - URL path including query string
 * @param body - Optional request body (triggers Digest header)
 */
export function generateHmacHeaders(config, method, requestPath, body) {
    const gmtTime = new Date().toUTCString();
    const signingString = buildSigningString(config.keyId, method, requestPath, gmtTime);
    const signature = computeSignature(config.secretKey, signingString);
    const headers = {
        Date: gmtTime,
        Authorization: buildAuthorizationHeader(config.keyId, signature),
        ...(body !== undefined ? { Digest: computeBodyDigest(body) } : {}),
    };
    return headers;
}
//# sourceMappingURL=hmac-auth.js.map