/// <reference types="cypress" />


describe('CDWaaS E2E Test', { viewportHeight: 1080, viewportWidth: 1920 }, () => {
  // beforeEach(() => {
  //   cy.viewport(1920,1080)
  // })

  it('進入CDWaaS並重置憑證', () => {
    cy.visit('http://localhost:8088/')
    localStorage.clear()
  })

  it('以admin登入', () => {
    cy.get('#username').type('rods');
    cy.get('#password').type('1234');
    cy.contains('Sign In').click();
  })

  it('建立儲存體連線', { tester: 'ken' }, () => {
    // 選取使用者
    cy.contains('Select a user', { timeout: 10000 }).parent().click().wait(100);// 怕視訊demo太lag導致失敗所以wait
    cy.contains('iRODS lab Zone Group Admin').click();

    // 點擊連線
    cy.get('.connectionTable').contains('Connect').parent().click();

    // 確認按鈕有切換
    cy.get('.connectionTable').contains('Disconnect');
  })


})